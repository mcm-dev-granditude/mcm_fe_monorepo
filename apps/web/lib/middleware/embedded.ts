// lib/middleware/embedded.ts
import { NextRequest, NextResponse } from "next/server";
import { REQUESTED_FROM } from "@repo/config";

export function embeddedRouteMiddleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  if (pathname.startsWith("/embedded")) {
    const requestedFrom = request.headers.get("x-requested-from");

    if (requestedFrom !== REQUESTED_FROM) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return undefined;
}