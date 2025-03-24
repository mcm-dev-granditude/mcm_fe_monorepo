import React from "react";
import {ScrollView, View} from "react-native";
import {ThemedCard} from "@/components/themed-card";
import {ThemedText} from "@/components/themed-text";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-background dark:bg-background">
      <View className="p-4">
        <ThemedText className="text-foreground dark:text-foreground text-2xl font-bold mb-6">
          Welcome to Themed App
        </ThemedText>

        <View className="space-y-4">
          <ThemedCard
            title="Shared Design System"
            description="This component uses the same design tokens as the web app"
            onPress={ () => console.log( "Pressed card 1" ) }
          />

          <ThemedCard
            title="Dark Mode Support"
            description="The theme automatically adapts between light and dark mode"
            onPress={ () => console.log( "Pressed card 2" ) }
          />

          <ThemedCard
            title="NativeWind Integration"
            description="Using Tailwind classes in React Native with shared tokens"
            onPress={ () => console.log( "Pressed card 3" ) }
          />
        </View>
      </View>
    </ScrollView>
  );
}