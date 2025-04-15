import { getWebServerUrl } from "@/utils/get-web-server-url";
import { WebViewRoutes } from "./types";

export interface WebViewRegistry {
  baseUrl: string;
  routes: WebViewRoutes;
}

export const webViewRegistry: WebViewRegistry = {
  baseUrl: getWebServerUrl(),
  routes: {
    home: "embedded/",
    news: "embedded/news",
    newsDetail: "embedded/news/"
  }
};

export const getWebViewUrl = (
  route: keyof WebViewRoutes,
  params?: Record<string, string>
): string => {
  let path = webViewRegistry.routes[route];

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (key === "slug") {
        path = `${path}${value}`;
      } else {
        // This would append ?key=value to the URL
        path = path.includes("?")
          ? `${path}&${key}=${encodeURIComponent(value)}`
          : `${path}?${key}=${encodeURIComponent(value)}`;
      }
    });
  }

  return `${webViewRegistry.baseUrl}${path}`;
};