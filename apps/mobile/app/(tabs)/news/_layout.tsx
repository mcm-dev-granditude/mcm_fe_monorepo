import { Stack } from "expo-router";
import React from "react";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function NewsLayout() {
  const primaryColor = useThemeColor("primaryLight");
  const surfaceColor = useThemeColor("backgroundSurface");
  return (
    <Stack screenOptions={{headerTintColor: primaryColor, headerStyle: {backgroundColor: surfaceColor}}}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Nyheter"
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitle: "Nyheter",
          presentation: "modal"
        }}
      />
    </Stack>
  );
}