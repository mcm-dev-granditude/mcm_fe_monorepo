import React from "react";
import { ColorSchemeName, View } from "react-native";

export function NativeWindDarkMode({
                                     children,
                                     colorScheme
                                   }: {
  children: React.ReactNode,
  colorScheme: ColorSchemeName
}) {
  // Handle the case where colorScheme might be undefined
  const isDarkMode = colorScheme === "dark";

  return (
    <View className={`flex-1 ${isDarkMode ? "dark" : ""}`}>
      {children}
    </View>
  );
}

// Usage example:
// <NativeWindDarkMode>
//   <View className="bg-background dark:bg-background text-foreground dark:text-foreground">
//     <Text>This will adapt to dark mode</Text>
//   </View>
// </NativeWindDarkMode>