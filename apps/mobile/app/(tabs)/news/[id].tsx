import React, { FC, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { getWebViewUrl } from "@/lib/webviews";
import { NwWebView } from "@/components/nw-webview";
import { useThemeColor } from "@/hooks/use-theme-color";

const NewsDetailScreen: FC = () => {
  const {id} = useLocalSearchParams();
  const newsWebview = getWebViewUrl("newsDetail", {slug: id as string});
  const navigation = useNavigation();
  const textColor = useThemeColor("foreground");

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "MCM Nyheter",
      headerTitleStyle: {
        color: textColor
      }
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <NwWebView url={newsWebview} />
    </SafeAreaView>
  );
};

export default NewsDetailScreen;