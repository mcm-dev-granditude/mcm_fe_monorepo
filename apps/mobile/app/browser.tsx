// app/browser.tsx
import React, { useRef, useState } from "react";
import { Linking, Platform, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useThemeColor } from "@/hooks/use-theme-color";
import { blockedDomains, enhancedBlockingScript, urlUtils } from "@/lib/browser/blocking-scripts";
import { BrowserHeader } from "@/lib/browser/browser-header";
import { ProgressBar } from "@/lib/browser/progress-bar";
import { LoadingOverlay } from "@/lib/browser/loading-overlay";

export default function BrowserScreen() {
  const params = useLocalSearchParams<{
    url: string;
    blocking: string;
    internalDomains: string;
  }>();

  const router = useRouter();

  // Parse URL parameters
  const initialUrl = params.url || "https://example.com";

  // Parse blocking preference (defaults to true if not specified)
  const enableBlocking = params.blocking !== "false";

  // Parse internal domains (sites where we don't want to block content)
  const internalDomains = params.internalDomains
    ? JSON.parse(params.internalDomains) as string[]
    : [];

  // States
  const [isLoading, setIsLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(initialUrl);
  const [progress, setProgress] = useState(0);

  // Theme colors
  const backgroundColor = useThemeColor("background");
  const textColor = useThemeColor("foreground");
  const secondaryColor = useThemeColor("secondary");
  const primaryColor = useThemeColor("primary");

  // WebView reference
  const webViewRef = useRef<WebView>(null);

  // Determine if current URL is an internal domain (where we don't want to block)
  const isInternalUrl = urlUtils.isInternalUrl(currentUrl, internalDomains);

  // Should we apply content blocking for the current URL?
  const shouldBlockContent = enableBlocking && !isInternalUrl;

  // Event handlers
  const handleClose = () => {
    router.back();
  };

  const handleOpenExternal = async () => {
    try {
      await Linking.openURL(currentUrl);
    } catch (error) {
      console.error("Error opening URL:", error);
    }
  };

  const handleLoadEnd = () => {
    setIsLoading(false);

    // Only inject blocking script if blocking is enabled and not an internal URL
    if (shouldBlockContent && webViewRef.current) {
      webViewRef.current.injectJavaScript(enhancedBlockingScript);
    }
  };

  const handleNavigationStateChange = (navState: {url: string, canGoBack: boolean, canGoForward: boolean}) => {
    setCurrentUrl(navState.url);
  };

  const handleLoadProgress = ({nativeEvent}: {nativeEvent: {progress: number}}) => {
    setProgress(nativeEvent.progress);
  };

  // Configure user agent to help with video blocking (only if blocking is enabled)
  const userAgent = shouldBlockContent ? Platform.select({
    ios: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1 - NoAutoplay",
    android: "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36 - NoAutoplay",
    default: "Mozilla/5.0 - NoAutoplay"
  }) : undefined;

  // Handle resource loading based on blocking preferences
  const handleShouldStartLoadWithRequest = (request: {url: string, mainDocumentURL?: string}) => {
    // If blocking is disabled or this is an internal URL, allow all requests
    if (!shouldBlockContent) return true;

    const url = request.url.toLowerCase();
    const isAutoplayRequest = urlUtils.hasAutoplayParam(url);

    // Block both ad domains and autoplay requests
    if (
      blockedDomains.some(domain => url.includes(domain)) ||
      isAutoplayRequest
    ) {
      // Check if it's a main frame navigation with autoplay (allow but modify)
      return request.mainDocumentURL === request.url && isAutoplayRequest;
    }

    return true;
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <BrowserHeader
        hostname={urlUtils.getHostname(currentUrl)}
        textColor={textColor}
        onClose={handleClose}
        onOpenExternal={handleOpenExternal}
      />

      {/* Progress bar */}
      <ProgressBar
        progress={progress}
        isLoading={isLoading}
        color={primaryColor}
      />

      {/* WebView */}
      <WebView
        ref={webViewRef}
        source={{uri: currentUrl}}
        className="flex-1"
        style={{backgroundColor}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={handleLoadEnd}
        onNavigationStateChange={handleNavigationStateChange}
        onLoadProgress={handleLoadProgress}
        startInLoadingState={true}

        // Content blocking settings (only apply if blocking is enabled)
        userAgent={userAgent}
        injectedJavaScript={shouldBlockContent ? enhancedBlockingScript : undefined}
        onShouldStartLoadWithRequest={shouldBlockContent ? handleShouldStartLoadWithRequest : undefined}

        // Media settings (apply regardless of blocking state)
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={shouldBlockContent}
        allowsFullscreenVideo={!shouldBlockContent}
        javaScriptCanOpenWindowsAutomatically={!shouldBlockContent}
        allowsPictureInPictureMediaPlayback={!shouldBlockContent}
      />

      {/* Loading overlay - only shown when progress is low */}
      <LoadingOverlay
        isVisible={isLoading && progress < 0.3}
        color={secondaryColor}
      />
    </SafeAreaView>
  );
}