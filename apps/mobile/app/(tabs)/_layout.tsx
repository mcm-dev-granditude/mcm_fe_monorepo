import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Home, Plane } from "lucide-react-native";

import { HapticTab } from "@/components/haptic-tab";
import { NwIcon } from "@/components/nw-icon";
import TabBarBackground from "@/components/ui/tab-bar-background";
import "../../styles/globals.css";
import { useThemeColor } from "@/hooks/use-theme-color";

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
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({color}) => (
            <NwIcon
              icon={Home}
              size={28}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({color}) => (
            <NwIcon
              icon={Plane}
              size={28}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}