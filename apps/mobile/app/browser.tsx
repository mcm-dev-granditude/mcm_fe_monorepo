// app/browser.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebView } from "react-native-webview";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ExternalLink, X } from "lucide-react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function BrowserScreen() {
  const {url = "https://example.com"} = useLocalSearchParams<{url: string}>();
  const router = useRouter();

  // States
  const [isLoading, setIsLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [progress, setProgress] = useState(0);
  const progressAnimation = useRef(new Animated.Value(0)).current;

  // Theme colors
  const backgroundColor = useThemeColor("background");
  const textColor = useThemeColor("foreground");
  const secondaryColor = useThemeColor("secondary");
  const primaryColor = useThemeColor("primary");

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: progress,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [progress, progressAnimation]);

  const getHostname = (urlString: string) => {
    try {
      return new URL(urlString).hostname;
    } catch (e) {
      return urlString;
    }
  };

  // Close handler
  const handleClose = () => {
    router.back();
  };

  const openInBrowser = async () => {
    try {
      await Linking.openURL(currentUrl);
    } catch (error) {
      console.error("Error opening URL:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header with hostname and close button */}
      <View className="flex-row items-center px-4 py-3 border-b border-border">
        <TouchableOpacity
          onPress={handleClose}
          className="p-2 rounded-full mr-3"
          activeOpacity={0.7}
          hitSlop={{top: 15, right: 15, bottom: 15, left: 15}}
        >
          <X
            size={20}
            color={textColor}
          />
        </TouchableOpacity>

        <View className="flex-1 flex-row items-center px-3 py-2 rounded-full bg-surface">
          <Text
            className="text-sm flex-1 text-foreground"
            numberOfLines={1}
          >
            {getHostname(currentUrl)}
          </Text>
        </View>

        <TouchableOpacity
          onPress={openInBrowser}
          className="p-2 ml-3"
          activeOpacity={0.7}
          hitSlop={{top: 15, right: 15, bottom: 15, left: 15}}
        >
          <ExternalLink
            size={20}
            color={textColor}
          />
        </TouchableOpacity>
      </View>

      {/* Progress bar */}
      <View className="h-1 w-full bg-surface overflow-hidden">
        <Animated.View
          className="h-full"
          style={[
            {backgroundColor: primaryColor},
            {
              width: progressAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"]
              }),
              opacity: isLoading ? 1 : 0
            }
          ]}
        />
      </View>

      {/* WebView */}
      <WebView
        source={{uri: currentUrl}}
        className="flex-1"
        style={{backgroundColor}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onNavigationStateChange={(navState) => {
          setCurrentUrl(navState.url);
        }}
        onLoadProgress={({nativeEvent}) => {
          setProgress(nativeEvent.progress);
        }}
        startInLoadingState={true}
      />

      {/* Loading overlay - only shown when progress is low */}
      {isLoading && progress < 0.3 && (
        <View
          style={StyleSheet.absoluteFill}
          className="justify-center items-center bg-background bg-opacity-50"
          pointerEvents="none"
        >
          <ActivityIndicator
            size="large"
            color={secondaryColor}
          />
        </View>
      )}
    </SafeAreaView>
  );
}