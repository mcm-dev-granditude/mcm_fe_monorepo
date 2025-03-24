import {Tabs} from "expo-router";
import React from "react";
import {Platform} from "react-native";
import {Home, Plane} from "lucide-react-native";

import {HapticTab} from "@/components/haptic-tab";
import {ThemedIcon} from "@/components/themed-icon";
import TabBarBackground from "@/components/ui/tab-bar-background";
import {useTheme} from "@/providers/theme-provider";
import "../../styles/globals.css";

export default function TabLayout() {
  const { effectiveTheme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: effectiveTheme === 'dark' ? '#7C3AED' : '#6D28D9',
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
            <ThemedIcon
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
            <ThemedIcon
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