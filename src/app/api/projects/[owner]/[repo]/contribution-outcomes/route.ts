import { Octokit } from "octokit";
import { NextRequest, NextResponse } from "next/server";
import { ContributionOutcomesMetrics } from "@/lib/mock-data";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const octokit = new Octokit({
  auth: GITHUB_TOKEN || undefined,
});

interface RouteParams {
  params: Promise<{
    owner: string;
    repo: string;
  }>;
}

const CONTRIBUTION_OUTCOMES_QUERY = `
  query($owner: String!, $repo: String!) {
    repository(owner: $owner, name: $repo) {
      # Repository owner info
      owner {
        login
      }

      # Merged PRs (recent)
      mergedPRs: pullRequests(
        first: 100,
        states: MERGED,
        orderBy: {field: UPDATED_AT, direction: DESC}
      ) {
        totalCount
        nodes {
          number
          createdAt
          mergedAt
          author {
            login
          }
          reviews(first: 5) {
            nodes {
              createdAt
              author {
                login
              }
            }
          }
          comments(first: 5) {
            nodes {
              createdAt
              author {
                login
              }
            }
          }
        }
      }

      # Closed (not merged) PRs
      closedPRs: pullRequests(
        first: 100,
        states: CLOSED,
        orderBy: {field: UPDATED_AT, direction: DESC}
      ) {
        totalCount
        nodes {
          number
          createdAt
          closedAt
          mergedAt
          author {
            login
          }
          reviews(first: 5) {
            nodes {
              createdAt
              author {
                login
              }
            }
          }
          comments(first: 5) {
            nodes {
              createdAt
              author {
                login
              }
            }
          }
        }
      }

      # Open PRs
      openPRs: pullRequests(
        first: 50,
        states: OPEN,
        orderBy: {field: UPDATED_AT, direction: DESC}
      ) {
        totalCount
      }
    }
  }
`;

interface ReviewOrComment {
  createdAt: string;
  author: {
    login: string;
  } | null;
}

interface PullRequest {
  number: number;
  createdAt: string;
  mergedAt?: string | null;
  closedAt?: string | null;
  author: {
    login: string;
  } | null;
  reviews: {
    nodes: ReviewOrComment[];
  };
  comments: {
    nodes: ReviewOrComment[];
  };
}

interface GraphQLResponse {
  repository: {
    owner: {
      login: string;
    };
    mergedPRs: {
      totalCount: number;
      nodes: PullRequest[];
    };
    closedPRs: {
      totalCount: number;
      nodes: PullRequest[];
    };
    openPRs: {
      totalCount: number;
    };
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { owner, repo } = await params;

  try {
    const response = await octokit.graphql<GraphQLResponse>(CONTRIBUTION_OUTCOMES_QUERY, {
      owner,
      repo,
    });

    const repoData = response.repository;

    // The repo owner is considered a maintainer
    const ownerLogin = repoData.owner.login.toLowerCase();

    const mergedPRs = repoData.mergedPRs.nodes;
    const closedPRs = repoData.closedPRs.nodes.filter((pr) => !pr.mergedAt); // Filter out merged ones
    const allClosedPRs = [...mergedPRs, ...closedPRs];

    // Calculate PR Acceptance Rate
    const totalClosed = allClosedPRs.length;
    const mergedCount = mergedPRs.length;
    const prAcceptanceRate = totalClosed > 0 ? Math.round((mergedCount / totalClosed) * 100) : 0;

    // Calculate Closed Without Merge Rate
    const closedWithoutMerge = closedPRs.length;
    const closedWithoutMergeRate = totalClosed > 0
      ? Math.round((closedWithoutMerge / totalClosed) * 100)
      : 0;

    // Calculate Time to First Response (for all closed PRs)
    const responseTimesHours: number[] = [];
    allClosedPRs.forEach((pr) => {
      const prAuthor = pr.author?.login?.toLowerCase() || "";
      const prCreatedAt = new Date(pr.createdAt);

      // Combine reviews and comments, then find first response from someone other than PR author
      const allResponses: ReviewOrComment[] = [
        ...pr.reviews.nodes,
        ...pr.comments.nodes,
      ].filter((item) =>
        item.author?.login &&
        item.author.login.toLowerCase() !== prAuthor
      );

      if (allResponses.length > 0) {
        const firstResponse = allResponses.sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )[0];

        const responseTime = new Date(firstResponse.createdAt).getTime() - prCreatedAt.getTime();
        const hours = responseTime / (1000 * 60 * 60);
        if (hours > 0 && hours < 8760) { // Filter out outliers > 1 year
          responseTimesHours.push(hours);
        }
      }
    });

    const timeToFirstResponse = responseTimesHours.length > 0
      ? Math.round(responseTimesHours.reduce((a, b) => a + b, 0) / responseTimesHours.length)
      : null;

    // Calculate Time to Merge (for merged PRs only)
    const mergeTimesHours: number[] = [];
    mergedPRs.forEach((pr) => {
      if (pr.mergedAt) {
        const createdAt = new Date(pr.createdAt).getTime();
        const mergedAt = new Date(pr.mergedAt).getTime();
        const hours = (mergedAt - createdAt) / (1000 * 60 * 60);
        if (hours > 0 && hours < 8760) { // Filter out outliers > 1 year
          mergeTimesHours.push(hours);
        }
      }
    });

    const timeToMerge = mergeTimesHours.length > 0
      ? Math.round(mergeTimesHours.reduce((a, b) => a + b, 0) / mergeTimesHours.length)
      : null;

    // Calculate External Contributor Share (PRs not from owner)
    let externalPRs = 0;
    allClosedPRs.forEach((pr) => {
      const prAuthor = pr.author?.login?.toLowerCase() || "";
      if (prAuthor && prAuthor !== ownerLogin) {
        externalPRs++;
      }
    });

    const externalContributorShare = totalClosed > 0
      ? Math.round((externalPRs / totalClosed) * 100)
      : 0;

    const metrics: ContributionOutcomesMetrics = {
      prAcceptanceRate,
      timeToFirstResponse,
      timeToMerge,
      externalContributorShare,
      closedWithoutMergeRate,
      totalPRs: {
        merged: repoData.mergedPRs.totalCount,
        closed: repoData.closedPRs.totalCount,
        open: repoData.openPRs.totalCount,
      },
    };

    return NextResponse.json(metrics);
  } catch (error) {
    console.error("GitHub GraphQL API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch contribution outcomes metrics" },
      { status: 500 }
    );
  }
}
