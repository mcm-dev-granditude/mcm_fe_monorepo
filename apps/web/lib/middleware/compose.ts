import { NextMiddleware, NextResponse } from "next/server";

export function composeMiddleware(...middlewares: NextMiddleware[]): NextMiddleware {
  return async function(request, event) {
    for (const middleware of middlewares) {
      const result = await middleware(request, event);
      if (result !== undefined) {
        return result;
      }
    }
    return NextResponse.next();
  };
}