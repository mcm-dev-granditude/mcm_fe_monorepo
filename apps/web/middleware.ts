import { embeddedRouteMiddleware } from "./lib/middleware/embedded";
import { composeMiddleware } from "@/lib/middleware/compose";

export const middleware = composeMiddleware(
  embeddedRouteMiddleware
);

export const config = {
  matcher: [
    "/embedded/:path*"
  ]
};