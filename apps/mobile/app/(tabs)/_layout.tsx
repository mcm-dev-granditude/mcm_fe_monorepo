import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { NwIcon } from "@/components/nw-icon";
import TabBarBackground from "@/components/ui/tab-bar-background";
import { useThemeColor } from "@/hooks/use-theme-color";
import { tabItems } from "@/lib/constants";

export default function TabLayout() {
  const primaryColor = useThemeColor("primary");

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: primaryColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute"
          },
          default: {}
        })
      }}
    >
      {
        tabItems.map((item) => (
          <Tabs.Screen
            key={item.name}
            name={item.name}
            options={{
              title: item.label,
              tabBarIcon: ({color}) => (
                <NwIcon
                  icon={item.icon}
                  size={24}
                  color={color}
                />
              )
            }}
          />
        ))
      }
    </Tabs>
  );
}