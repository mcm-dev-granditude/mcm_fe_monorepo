import { getWebServerUrl } from "@/utils/get-web-server-url";

export interface WebViewRegistry {
  baseUrl: string;
  routes: {
    home: string;
    news: string;
  };
}


export const webViewRegistry: WebViewRegistry = {
  baseUrl: getWebServerUrl(),
  routes: {
    home: "embedded/",
    news: "embedded/news"
  }
};


export const getWebViewUrl = (route: keyof WebViewRegistry["routes"]): string => {
  const path = webViewRegistry.routes[route];
  return `${webViewRegistry.baseUrl}${path}`;
};