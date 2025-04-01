import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NwWebView } from "@/components/nw-webview";
import { getWebViewUrl } from "@/lib/webviews";

export default function HomeScreen() {
  const homeWebview = getWebViewUrl("home");

  return (
    <SafeAreaView className="flex-1 bg-background">
      <NwWebView
        url={homeWebview}
      />
    </SafeAreaView>
  );
}