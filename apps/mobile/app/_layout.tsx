import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "react-native-reanimated";
import "../styles/globals.css";

import SpaceMonoFont from "@/assets/fonts/SpaceMono-Regular.ttf";
import Providers from "@/providers/providers";
import { useColorScheme } from "react-native";
import NwStatusBar from "@/components/layout/NwStatusBar";

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded, fontError] = useFonts({
    SpaceMono: SpaceMonoFont
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen once the assets are loaded
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={style.root}
      onLayout={onLayoutRootView}
    >
      <Providers colorScheme={colorScheme}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{headerShown: false}}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <NwStatusBar />
      </Providers>
    </GestureHandlerRootView>
  );
}

const style = {
  root: {
    flex: 1
  }
};