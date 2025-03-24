import {DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {Stack} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {StatusBar} from "expo-status-bar";
import React, {useEffect} from "react";

import "react-native-reanimated";
import "../styles/globals.css";

import {NativeWindDarkMode} from "@/styles/dark-mode";


import {ThemeProvider} from "@/providers/theme-provider";

// @ts-expect-error - asset imports not typed
import SpaceMonoFont from "../assets/fonts/SpaceMono-Regular.ttf";
import {useColorScheme} from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Load the fonts with the imported asset
  const [loaded] = useFonts( {
    SpaceMono: SpaceMonoFont
  } );

  useEffect( () => {
    if ( loaded ) {
      void SplashScreen.hideAsync();
    }
  }, [loaded] );

  if ( !loaded ) {
    return null;
  }

  return (
    <NavigationThemeProvider value={ colorScheme === "dark" ? DarkTheme : DefaultTheme }>
      <ThemeProvider>
        <NativeWindDarkMode colorScheme={ colorScheme }>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={ {headerShown: false} }
            />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style={ colorScheme === "dark" ? "light" : "dark" } />
        </NativeWindDarkMode>
      </ThemeProvider>
    </NavigationThemeProvider>
  );
}