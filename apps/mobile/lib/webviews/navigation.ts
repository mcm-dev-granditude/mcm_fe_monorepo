import { WebViewRoutes } from "./types";
import { getWebViewUrl } from "@/lib/webviews/webview.config";

export interface NavigationMessage {
  type: "navigation";
  route: keyof WebViewRoutes;
  params?: Record<string, string>;
}

export const createNavigationMessage = (
  route: keyof WebViewRoutes,
  params?: Record<string, string>
): NavigationMessage => ({
  type: "navigation",
  route,
  params
});

export const handleNavigationMessage = (
  data: NavigationMessage,
  navigate: (url: string) => void
): void => {
  if (data.type === "navigation" && data.route) {
    const url = getWebViewUrl(data.route, data.params);
    navigate(url);
  }
};