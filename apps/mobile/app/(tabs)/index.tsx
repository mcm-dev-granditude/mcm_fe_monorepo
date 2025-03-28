import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NwWebView } from "@/components/nw-webview";
import { getWebViewUrl } from "@/webviews/webview.config";
import { WebViewMessageEvent } from "react-native-webview";

export default function HomeScreen() {
  const homeUrl = getWebViewUrl("home");

  const handleWebViewMessage = (event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      console.log("Message from WebView:", data);

      if (data.type === "navigation") {
        // Handle navigation requests if needed
      }
    } catch (error) {
      console.error("Error parsing WebView message:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <NwWebView
        url={homeUrl}
        onMessage={handleWebViewMessage}
      />
    </SafeAreaView>
  );
}