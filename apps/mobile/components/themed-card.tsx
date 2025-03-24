import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

interface ThemedCardProps {
  title: string;
  description: string;
  onPress?: () => void;
}

export function ThemedCard( {title, description, onPress}: ThemedCardProps ) {
  return (
    <View className="bg-card dark:bg-card rounded-lg p-4 shadow-sm border border-border dark:border-border">
      <Text className="text-card-foreground dark:text-card-foreground font-bold text-lg mb-2">
        { title }
      </Text>
      <Text className="text-muted-foreground dark:text-muted-foreground mb-4">
        { description }
      </Text>

      { onPress && (
        <TouchableOpacity
          onPress={ onPress }
          className="bg-primary dark:bg-primary py-2 px-4 rounded-md"
        >
          <Text className="text-primary-foreground dark:text-primary-foreground text-center font-medium">
            Learn More
          </Text>
        </TouchableOpacity>
      ) }
    </View>
  );
}