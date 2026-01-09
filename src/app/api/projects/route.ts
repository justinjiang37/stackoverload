import { Octokit } from "octokit";
import { NextRequest, NextResponse } from "next/server";

const octokit = new Octokit();

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const language = searchParams.get("language") || "";
  const sort = searchParams.get("sort") || "stars";
  const page = searchParams.get("page") || "1";

  try {
    const query = language
      ? `language:${language} stars:>1000`
      : "stars:>10000";

    const response = await octokit.rest.search.repos({
      q: query,
      sort: sort as "stars" | "forks" | "updated",
      order: "desc",
      per_page: 12,
      page: parseInt(page),
    });

    const projects = response.data.items.map((repo) => ({
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description || "No description",
      stars: repo.stargazers_count,
      language: repo.language || "Unknown",
      owner: repo.owner?.login || "Unknown",
      ownerAvatarUrl: repo.owner?.avatar_url || "",
      lastCommitDate: repo.pushed_at || new Date().toISOString(),
      url: repo.html_url,
      forks: repo.forks_count,
      openIssues: repo.open_issues_count,
    }));

    return NextResponse.json({ projects, total: response.data.total_count });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
