import React, { useCallback, useRef, useState } from "react";
import { ActivityIndicator, Linking, StyleSheet, View } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { useTheme } from "@/providers/theme-provider";
import { useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@repo/ui";
import { bridgeScript, linkHandlerScript, noBounceScript, viewportScript } from "@/lib/webviews";

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
  const [currentUrl, setCurrentUrl] = useState(appendAppParam(url));
  const webViewRef = useRef<WebView>(null);
  const {effectiveTheme} = useTheme();
  const backgroundColor = useThemeColor("background");

  // Function to append app parameter to URLs
  function appendAppParam(urlToModify: string): string {
    try {
      const urlObj = new URL(urlToModify);

      // Only add the param for embedded routes
      if (urlObj.pathname.startsWith("/embedded")) {
        urlObj.searchParams.set("app", "true");
      }

      return urlObj.toString();
    } catch (error) {
      console.error("Error appending app param to URL:", error);
      return urlToModify;
    }
  }

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

  const handleWebViewMessage = useCallback(async (event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      console.log("Message from WebView:", data);

      if (data.type === "navigation") {
        if (data.url) {
          setCurrentUrl(appendAppParam(data.url));
        } else if (data.payload && data.payload.path) {
          const baseUrl = new URL(currentUrl).origin;
          const fullUrl = `${baseUrl}${data.payload.path}`;
          setCurrentUrl(appendAppParam(fullUrl));
        }
      } else if (data.type === "externalLink") {
        const externalUrl = data.url || (data.payload && data.payload.url);
        if (externalUrl) {
          await Linking.openURL(externalUrl);
        }
      }

      onMessage?.(event);
    } catch (e) {
      // todo -- Error in toast
      console.error("Error parsing WebView message:", e);
    }
  }, [onMessage, currentUrl]);

  return (
    <View className={cn("flex-1", className)}>
      <WebView
        ref={webViewRef}
        source={{uri: currentUrl}}
        injectedJavaScript={combinedJs}
        style={{backgroundColor}}
        onMessage={handleWebViewMessage}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
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