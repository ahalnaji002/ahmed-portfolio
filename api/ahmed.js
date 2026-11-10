// GET /api/ahmed — Ahmed's portfolio as JSON.
// Deployed as a Vercel Function; also served by the Vite dev server (see vite.config.js).
import { API_PATH, API_SECTIONS, buildApiResponse } from "../src/data/profile.js";

const HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body, null, 2) + "\n", { status, headers: HEADERS });
}

export function GET(request) {
  const url = new URL(request.url);
  const data = buildApiResponse(url.origin);
  const only = url.searchParams.get("only");

  if (only) {
    if (!API_SECTIONS.includes(only)) {
      return json(
        {
          error: "unknown_section",
          message: `"${only}" is not a section. Try one of: ${API_SECTIONS.join(", ")}.`,
          sections: API_SECTIONS,
        },
        400,
      );
    }
    return json({ [only]: data[only] });
  }

  return json({
    ...data,
    _meta: {
      endpoint: API_PATH,
      sections: API_SECTIONS,
      usage: `${API_PATH}?only=projects`,
      generated_at: new Date().toISOString(),
    },
  });
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: { ...HEADERS, "Access-Control-Allow-Methods": "GET, OPTIONS" },
  });
}
