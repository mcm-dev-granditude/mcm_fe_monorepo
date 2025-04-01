import React, { FC } from "react";
import { useTabInfo } from "@/hooks/use-tab-info";
import { SafeAreaView } from "react-native-safe-area-context";
import { getWebViewUrl } from "@/lib/webviews";
import { NwWebView } from "@/components/nw-webview";

const NewsScreen: FC = () => {
  const tabInfo = useTabInfo();
  const newsWebview = getWebViewUrl("news");

  return (
    <SafeAreaView className="flex-1 bg-background">
      <NwWebView url={newsWebview} />
    </SafeAreaView>
  );
};

export default NewsScreen;