// components/nw-webview.tsx
import React, { useCallback, useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { WebView, WebViewMessageEvent, WebViewNavigation } from "react-native-webview";
import { useTheme } from "@/providers/theme-provider";
import { useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@repo/ui";
import { REQUESTED_FROM } from "@repo/config";
import {
  bridgeScript,
  handleNavigationMessage,
  linkHandlerScript,
  noBounceScript,
  viewportScript
} from "@/lib/webviews";

interface NwWebViewProps {
  url: string;
  injectedJavaScript?: string;
  onMessage?: (event: WebViewMessageEvent) => void;
  className?: string;
}

export function NwWebView({
                            url,
                            injectedJavaScript,
                            onMessage,
                            className = ""
                          }: NwWebViewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(url);
  const webViewRef = useRef<WebView>(null);
  const {effectiveTheme} = useTheme();
  const backgroundColor = useThemeColor("background");

  const defaultInjectedJs = `
    ${bridgeScript(effectiveTheme)}
    ${linkHandlerScript}
    ${noBounceScript}
    ${viewportScript}
    true;
  `;

  const combinedJs = injectedJavaScript
    ? `${defaultInjectedJs}\n${injectedJavaScript}`
    : defaultInjectedJs;

  const handleWebViewMessage = useCallback((event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      console.log("Message from WebView:", data);

      // Handle navigation messages
      if (data.type === "navigation") {
        handleNavigationMessage(data, (newUrl) => {
          // Update the source URL - this will cause WebView to navigate
          setCurrentUrl(newUrl);
          // No need to call a method on the ref, the source prop update will trigger navigation
        });
      }

      // Call the original onMessage if provided
      if (onMessage) {
        onMessage(event);
      }
    } catch (error) {
      console.error("Error parsing WebView message:", error);
    }
  }, [onMessage]);

  // Handle navigation state changes
  const onNavigationStateChange = (navState: WebViewNavigation) => {
    // You can track navigation state changes here if needed
    console.log("Navigation state changed:", navState.url);
  };

  return (
    <View className={cn("flex-1", className)}>
      <WebView
        ref={webViewRef}
        source={{uri: currentUrl, headers: {"X-Requested-From": REQUESTED_FROM}}}
        injectedJavaScript={combinedJs}
        style={{backgroundColor}}
        onMessage={handleWebViewMessage}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onNavigationStateChange={onNavigationStateChange}
        containerStyle={styles.container}
        sharedCookiesEnabled={true}
        allowsBackForwardNavigationGestures
        cacheEnabled={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        pullToRefreshEnabled={false}
        bounces={false}
        overScrollMode="never"
        decelerationRate="normal"
      />
      {isLoading && (
        <View
          style={StyleSheet.absoluteFill}
          className="justify-center items-center"
        >
          <ActivityIndicator
            size="large"
            className="text-primary"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});