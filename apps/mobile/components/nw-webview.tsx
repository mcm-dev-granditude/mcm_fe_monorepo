import React, { useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { useTheme } from "@/providers/theme-provider";
import { useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@repo/ui";
import { bridgeScript } from "@/webviews/bridge";
import { linkHandlerScript } from "@/webviews/link-handler-script";


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
  const webViewRef = useRef<WebView>(null);
  const {effectiveTheme} = useTheme();
  const backgroundColor = useThemeColor("background");


  const defaultInjectedJs = `
    ${bridgeScript(effectiveTheme)}
    ${linkHandlerScript}
    true;
  `;

  const combinedJs = injectedJavaScript
    ? `${defaultInjectedJs}\n$${injectedJavaScript}`
    : defaultInjectedJs;

  return (
    <View className={cn("flex-1", className)}>
      <WebView
        ref={webViewRef}
        source={{uri: url}}
        injectedJavaScript={combinedJs}
        style={{backgroundColor}}
        onMessage={onMessage}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        containerStyle={styles.container}
        sharedCookiesEnabled={true}
        allowsBackForwardNavigationGestures
        pullToRefreshEnabled
        cacheEnabled={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
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