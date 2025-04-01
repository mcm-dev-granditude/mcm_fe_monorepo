import React, { useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebView } from "react-native-webview";
import { ArrowLeft, ArrowRight, ExternalLink, RotateCw, Share2, X } from "lucide-react-native";
import { useTheme } from "@/providers/theme-provider";
import { useThemeColor } from "@/hooks/use-theme-color";
import { cn } from "@repo/ui";

interface BrowserModalProps {
  isVisible: boolean;
  url: string;
  onClose: () => void;
}

export function BrowserModal({isVisible, url, onClose}: BrowserModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressAnimation] = useState(new Animated.Value(0));
  const webViewRef = React.useRef<WebView>(null);

  const {effectiveTheme} = useTheme();
  const isDark = effectiveTheme === "dark";

  const backgroundColor = useThemeColor("background");
  const textColor = useThemeColor("foreground");
  const secondaryColor = useThemeColor("secondary");
  const primaryColor = useThemeColor("primary");

  // Create StyleSheet outside the render function
  const styles = StyleSheet.create({
    progressBar: {
      height: 4,
      backgroundColor: primaryColor
    },
    progressContainer: {
      height: 4,
      backgroundColor
    },
    progressAnimated: {
      opacity: isLoading ? 1 : 0
    }
  });

  React.useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, [progress, progressAnimation]);

  const handleNavigationStateChange = (navState: {url: string, canGoBack: boolean, canGoForward: boolean}) => {
    setCurrentUrl(navState.url);
    setCanGoBack(navState.canGoBack);
    setCanGoForward(navState.canGoForward);
  };

  const goBack = () => {
    webViewRef.current?.goBack();
  };

  const goForward = () => {
    webViewRef.current?.goForward();
  };

  const reload = () => {
    webViewRef.current?.reload();
  };

  const openInBrowser = async () => {
    // Use Linking to open in external browser
    await require("react-native").Linking.openURL(currentUrl);
  };

  const shareUrl = async () => {
    // Use Share API
    try {
      await require("react-native").Share.share({
        message: currentUrl,
        url: currentUrl
      });
    } catch (error) {
      console.error("Error sharing URL:", error);
    }
  };

  const getHostname = (urlString: string) => {
    try {
      const url = new URL(urlString);
      return url.hostname;
    } catch (e) {
      return urlString;
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />

      <SafeAreaView className={cn("flex-1 bg-background")}>
        <View
          className={cn(
            "flex-row items-center px-4 py-3",
            "bg-background",
            "border-b border-b-border"
          )}
        >
          <TouchableOpacity
            onPress={onClose}
            className="p-2 rounded-full mr-3"
            activeOpacity={0.7}
          >
            <X
              size={20}
              color={textColor}
            />
          </TouchableOpacity>

          <View
            className={cn(
              "flex-1 flex-row items-center px-3 py-2 rounded-full",
              "bg-surface"
            )}
          >
            <Text
              className={cn("text-sm flex-1 text-foreground")}
              numberOfLines={1}
            >
              {getHostname(currentUrl)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={openInBrowser}
            className="p-2 ml-3"
            activeOpacity={0.7}
          >
            <ExternalLink
              size={20}
              color={textColor}
            />
          </TouchableOpacity>
        </View>

        {/* Progress bar */}
        <View style={styles.progressContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              styles.progressAnimated,
              {
                width: progressAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"]
                })
              }
            ]}
          />
        </View>

        {/* WebView */}
        <WebView
          ref={webViewRef}
          source={{uri: url}}
          className="flex-1"
          style={{backgroundColor}}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onNavigationStateChange={handleNavigationStateChange}
          onLoadProgress={({nativeEvent}) => {
            setProgress(nativeEvent.progress);
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          sharedCookiesEnabled={true}
          pullToRefreshEnabled={true}
        />

        {/* Loading overlay */}
        {isLoading && progress < 0.8 && (
          <View className="absolute inset-0 justify-center items-center bg-opacity-40 bg-background">
            <ActivityIndicator
              size="large"
              color={secondaryColor}
            />
          </View>
        )}

        {/* Bottom navigation bar */}
        <View
          className={cn(
            "flex-row items-center justify-between px-4 py-3",
            "bg-background",
            "border-t border-t-border"
          )}
        >
          <TouchableOpacity
            onPress={goBack}
            disabled={!canGoBack}
            className={cn(
              "p-3 rounded-full",
              !canGoBack && "opacity-30"
            )}
            activeOpacity={0.7}
          >
            <ArrowLeft
              size={20}
              color={textColor}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goForward}
            disabled={!canGoForward}
            className={cn(
              "p-3 rounded-full",
              !canGoForward && "opacity-30"
            )}
            activeOpacity={0.7}
          >
            <ArrowRight
              size={20}
              color={textColor}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={reload}
            className="p-3 rounded-full"
            activeOpacity={0.7}
          >
            <RotateCw
              size={20}
              color={textColor}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={shareUrl}
            className="p-3 rounded-full"
            activeOpacity={0.7}
          >
            <Share2
              size={20}
              color={textColor}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onClose}
            className={cn(
              "px-4 py-2 rounded-lg",
              "bg-secondary"
            )}
            activeOpacity={0.7}
          >
            <Text className={"text-foreground"}>Done</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}