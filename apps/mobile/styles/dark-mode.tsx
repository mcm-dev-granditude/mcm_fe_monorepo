import React from "react";
import { View } from "react-native";
import { useTheme } from "@/providers/theme-provider";

export function NativeWindDarkMode({
                                     children
                                   }: {
  children: React.ReactNode,
}) {
  const {isDarkMode} = useTheme();

  return (
    <View className={`flex-1 ${isDarkMode ? "dark" : ""}`}>
      {children}
    </View>
  );
}