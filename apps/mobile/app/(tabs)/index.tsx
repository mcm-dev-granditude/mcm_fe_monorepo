import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NwText } from "@/components/nw-text";
import { NwWebView } from "@/components/nw-webview";
import { getWebViewUrl } from "@/config/web-view.config";

export default function HomeScreen() {
  const homeUrl = getWebViewUrl("home");

  // Handle messages from WebView
  const handleWebViewMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      console.log("Message from WebView:", data);

      // Handle different message types
      if (data.type === "navigation") {
        // Handle navigation requests
      }
    } catch (error) {
      console.error("Error parsing WebView message:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1">
        <View className="p-2 border-b border-border">
          <NwText
            variant="heading"
            className="text-foreground"
          >Home</NwText>
        </View>

        <NwWebView
          url={homeUrl}
          onMessage={handleWebViewMessage}
          injectedJavaScript={`
            // Handle links to keep them in the WebView
            document.addEventListener('click', function(e) {
              var target = e.target;
              while (target && target.tagName !== 'A') {
                target = target.parentNode;
              }
              if (target && target.tagName === 'A') {
                e.preventDefault();
                var href = target.getAttribute('href');
                if (href && !href.startsWith('http')) {
                  window.ReactNativeBridge.postMessage({
                    type: 'navigation',
                    payload: { path: href }
                  });
                } else if (href) {
                  window.location.href = href;
                }
              }
            }, true);
          `}
        />
      </View>
    </SafeAreaView>
  );
}