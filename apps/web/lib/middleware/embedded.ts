import { NextRequest, NextResponse } from "next/server";

export function embeddedRouteMiddleware(request: NextRequest) {
  const {pathname, searchParams} = request.nextUrl;

  if (pathname.startsWith("/embedded")) {
    const isApp = searchParams.has("app");

    if (!isApp) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return undefined;
}