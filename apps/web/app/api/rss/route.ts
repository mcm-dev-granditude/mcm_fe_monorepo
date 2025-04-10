import { NextRequest, NextResponse } from "next/server";
import { fetchRssItems } from "@/app/api/rss/service";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const source = searchParams.get("source");

    if (!source) {
      return NextResponse.json(
        {error: "Source parameter is required"},
        {status: 400}
      );
    }

    const items = await fetchRssItems(source);
    return NextResponse.json(items);
  } catch (error) {
    console.error("[route]: ", error instanceof Error ? error.message : error);
    return NextResponse.json(
      {error: "Failed to fetch news"},
      {status: 500}
    );
  }
}