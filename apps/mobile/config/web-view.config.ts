// packages/config/src/webview-config.ts

export interface WebViewConfig {
  baseUrl: string;
  routes: {
    home: string;
    news: string;
    statistics: string;
  };
}

// Directly use the IP that works for your physical device
const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === "production") {
    return "https://matchcentermedia.vercel.app";
  }

  // Actual IP address for physical devices
  return "http://192.168.8.183:3000";
};

export const webViewConfig: WebViewConfig = {
  baseUrl: getBaseUrl(),
  routes: {
    home: "/",
    news: "/news",
    statistics: "/statistics"
  }
};

export const getWebViewUrl = (route: keyof WebViewConfig["routes"]): string => {
  const path = webViewConfig.routes[route];
  return `${webViewConfig.baseUrl}${path}`;
};