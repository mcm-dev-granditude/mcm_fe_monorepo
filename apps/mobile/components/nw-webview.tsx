import React, { useCallback, useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { useRouter } from "expo-router";
import { useTheme } from "@/providers/theme-provider";
import { useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@repo/ui";
import { bridgeScript, linkHandlerScript, noBounceScript, viewportScript } from "@/lib/webviews";
import { useBrowser } from "@/lib/browser/use-browser";

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
  const {openBrowser} = useBrowser();
  const [initialUrl] = useState(
    url.startsWith("http")
      ? new URL(url).pathname.startsWith("/embedded")
        ? `${url}${url.includes("?") ? "&" : "?"}app=true`
        : url
      : url
  );

  const webViewRef = useRef<WebView>(null);
  const {effectiveTheme} = useTheme();
  const backgroundColor = useThemeColor("background");
  const router = useRouter();

  const combinedJs = [
    bridgeScript(effectiveTheme),
    linkHandlerScript,
    noBounceScript,
    viewportScript,
    injectedJavaScript,
    "true;"
  ].filter(Boolean).join("\n");

  const handleWebViewMessage = useCallback((event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);

      if (data.type === "navigation") {
        let routePath = "";

        if (data.payload?.path) {
          routePath = data.payload.path.replace(/^\/embedded\/?/, "");
        } else if (data.url) {
          routePath = data.url.replace(/^\/embedded\/?/, "");
          if (routePath.startsWith("http")) {
            try {
              const urlObj = new URL(routePath);
              routePath = urlObj.pathname + urlObj.search;
            } catch {
              routePath = "";
            }
          }
          routePath = routePath.replace(/^\/embedded\/?/, "");
        }

        if (routePath && !routePath.startsWith("/")) {
          routePath = `/${routePath}`;
        }

        if (!routePath) routePath = "/";

        router.push(routePath as any);
      } else if (data.type === "externalLink") {
        const extUrl = data.url || data.payload?.url;
        if (extUrl) {
          openBrowser(extUrl);
        }
      }

      onMessage?.(event);
    } catch (e) {
      console.error("Error handling WebView message:", e);
    }
  }, [onMessage, openBrowser, router]);

  // Inject the link handler script after page loads
  const onPageLoad = useCallback(() => {
    setIsLoading(false);
    webViewRef.current?.injectJavaScript(`${linkHandlerScript}\ntrue;`);
  }, []);

  return (
    <View className={cn("flex-1", className)}>
      <WebView
        ref={webViewRef}
        source={{uri: initialUrl}}
        injectedJavaScript={combinedJs}
        style={{backgroundColor}}
        onMessage={handleWebViewMessage}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={onPageLoad}
        containerStyle={styles.container}
        sharedCookiesEnabled
        allowsBackForwardNavigationGestures={false}
        cacheEnabled
        domStorageEnabled
        javaScriptEnabled
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
            className="text-secondary"
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