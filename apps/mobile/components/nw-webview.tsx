import React, { useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { useColorScheme } from "nativewind";
import { useThemeColor } from "@/hooks/use-theme-color";

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
  const {colorScheme} = useColorScheme();
  const backgroundColor = useThemeColor("background");

  // Setup the bridge to handle messages from web to native
  const defaultInjectedJs = `
    window.ReactNativeBridge = {
      postMessage: (data) => {
        window.ReactNativeWebView.postMessage(JSON.stringify(data));
      },
      getColorScheme: () => "${colorScheme}"
    };
    
    // Inject color scheme class for Tailwind
    document.documentElement.classList.add('${colorScheme}');
    true;
  `;

  const combinedJs = injectedJavaScript
    ? `${defaultInjectedJs}\n${injectedJavaScript}`
    : defaultInjectedJs;

  return (
    <View className={`flex-1 ${className}`}>
      <WebView
        ref={webViewRef}
        source={{uri: url}}
        injectedJavaScript={combinedJs}
        onMessage={onMessage}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        style={{backgroundColor}}
        containerStyle={{flexGrow: 1}}
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
            color="#1971c2"
          />
        </View>
      )}
    </View>
  );
}