// GET /api/github — Ahmed's most recently pushed public repository.
// Proxies the GitHub API so visitors don't hit its per-IP rate limit; the CDN caches it.
import { profile } from "../src/data/profile.js";

const USERNAME = new URL(profile.contact.github).pathname.replace(/\//g, "");

const HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

function json(body, status, cacheControl) {
  return new Response(JSON.stringify(body, null, 2) + "\n", {
    status,
    headers: { ...HEADERS, "Cache-Control": cacheControl },
  });
}

export async function GET() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=pushed&direction=desc&per_page=1&type=owner`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-activity",
          ...(process.env.GITHUB_TOKEN ? { Authorization: "Bearer " + process.env.GITHUB_TOKEN } : {}),
        },
        signal: AbortSignal.timeout(5000),
      },
    );

    if (!response.ok) throw new Error("GitHub responded " + response.status);

    const [repo] = await response.json();
    if (!repo) return json({ error: "no_public_repos" }, 404, "public, s-maxage=600");

    return json(
      {
        user: USERNAME,
        repo: repo.name,
        url: repo.html_url,
        description: repo.description,
        language: repo.language,
        pushed_at: repo.pushed_at,
      },
      200,
      "public, s-maxage=900, stale-while-revalidate=3600",
    );
  } catch (error) {
    return json({ error: "github_unavailable", message: error.message }, 502, "public, s-maxage=60");
  }
}
