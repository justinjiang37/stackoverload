import { Octokit } from "octokit";
import { NextRequest, NextResponse } from "next/server";

const octokit = new Octokit();

export async function GET(request: NextRequest) {
  // Extracting info from searchParams
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search") || "";
  const language = searchParams.get("language") || "";
  const sort = searchParams.get("sort") || "stars";
  const page = searchParams.get("page") || "1";

  try {
    // Build query: use search term if provided, otherwise show popular repos
    let query = search ? `${search} in:name,description` : "stars:>10000";
    if (language) {
      query += ` language:${language}`;
    }
    if (!search) {
      query += " stars:>1000";
    }

    // call github api
    const response = await octokit.rest.search.repos({
      q: query,
      sort: sort as "stars" | "forks" | "updated",
      order: "desc",
      per_page: 12,
      page: parseInt(page),
    });

    // extract necessary info for repo react component
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

    // return the response
    return NextResponse.json({ projects, total: response.data.total_count });
  } catch (error) {
    console.error("GitHub API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
