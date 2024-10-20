import { NextRequest, NextResponse } from "next/server";
import cache from "memory-cache";
import { scrapeGitHubContributions, UserNotFoundError } from "@/utils/scrape";

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } },
) {
  const { username } = params;
  const { searchParams } = new URL(req.url);

  const y = searchParams.getAll("y");

  const years =
    y?.length > 0 ? y.map((year) => parseInt(year)).filter(isFinite) : [];
  if (years.some((year) => !/^\d+$/.test(year.toString()))) {
    return NextResponse.json(
      { error: "Query parameter 'y' must be an integer" },
      { status: 400 },
    );
  }

  const query = {
    years,
  };

  const key = `${username}-${JSON.stringify(query)}`;
  const cached = cache.get(key);

  if (cached !== null) {
    return NextResponse.json(cached);
  }

  try {
    const response = await scrapeGitHubContributions(username, query);
    cache.put(key, response, 1000 * 3600); // Cache for an hour
    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof UserNotFoundError) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }
    return NextResponse.json(
      { error: `Error scraping data: ${error}` },
      { status: 500 },
    );
  }
}
