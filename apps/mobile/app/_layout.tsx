import "../app/styles/globals.css";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import SpaceMonoFont from "@/assets/fonts/SpaceMono-Regular.ttf";
import Providers from "@/providers/providers";
import NwStatusBar from "@/components/layout/nw-status-bar";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
        await Font.loadAsync({
          SpaceMono: SpaceMonoFont
        });

        // Add any other initialization logic here
        // For example: await initializeDatabase();

        // Simulate any additional loading if needed
        // await new Promise(resolve => setTimeout(resolve, 500));
      } catch (e) {
        console.warn("Error loading app resources:", e);
      } finally {
        setAppIsReady(true);
      }
    }

    void prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This hides the splash screen once the app is ready to render
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={styles.root}
      onLayout={onLayoutRootView}
    >
      <Providers>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="browser"
            options={{
              headerShown: false,
              presentation: "modal",
              animation: "slide_from_bottom",
              gestureEnabled: true,
              gestureDirection: "vertical"
            }}
          />

          <Stack.Screen name="+not-found" />
        </Stack>
        <NwStatusBar />
      </Providers>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});