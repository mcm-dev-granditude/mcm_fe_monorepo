import { Stack } from "expo-router";
import React from "react";

export default function NewsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "News"
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerTitle: "News Detail",
          headerBackTitle: "News",
          presentation: "card"
        }}
      />
    </Stack>
  );
}