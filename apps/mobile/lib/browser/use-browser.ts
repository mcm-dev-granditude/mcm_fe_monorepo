import { useRouter } from "expo-router";
import { Platform } from "react-native";

export interface BrowserOptions {
  /**
   * Enable content blocking (ads, trackers, autoplay videos)
   * @default true
   */
  enableBlocking?: boolean;

  /**
   * List of domains that should be excluded from content blocking
   * These are your own domains where you want to allow tracking
   */
  internalDomains?: string[];
}

/**
 * Hook for opening the in-app browser with configurable options
 */
export function useBrowser(defaultOptions: BrowserOptions = {}) {
  const router = useRouter();

  const openBrowser = (url: string, options: BrowserOptions = {}) => {
    // Merge default options with call-specific options
    const mergedOptions: BrowserOptions = {
      enableBlocking: true,
      ...defaultOptions,
      ...options
    };

    // Convert options to URL parameters
    const params = new URLSearchParams();
    params.append("url", url);
    params.append("blocking", mergedOptions.enableBlocking ? "true" : "false");

    // Add internal domains if provided
    if (mergedOptions.internalDomains && mergedOptions.internalDomains.length > 0) {
      params.append("internalDomains", JSON.stringify(mergedOptions.internalDomains));
    }

    // Navigate to browser screen with parameters
    router.push({
      pathname: "/browser",
      params: Object.fromEntries(params)
    });
  };

  /**
   * Get custom user agent with NoAutoplay hint
   */
  const getCustomUserAgent = (): string => {
    return Platform.select({
      ios: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1 - NoAutoplay",
      android: "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36 - NoAutoplay",
      default: "Mozilla/5.0 - NoAutoplay"
    });
  };

  return {
    openBrowser,
    getCustomUserAgent
  };
}