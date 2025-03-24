import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

interface ThemedCardProps {
  title: string;
  description: string;
  action?: {
    onPress: () => void;
    label: string;
  };

}

export function Card( {title, description, action}: ThemedCardProps ) {
  return (
    <View className="bg-card  rounded-lg p-4 border border-border ">
      <Text className="text-card-foreground  font-bold text-lg mb-2">
        { title }
      </Text>
      <Text className="text-muted-foreground  mb-4">
        { description }
      </Text>

      { action?.onPress && (
        <TouchableOpacity
          onPress={ action.onPress }
          className="bg-primary primary py-2 px-4 rounded-md"
        >
          <Text className="text-primary-foreground  text-center font-medium">
            { action.label }
          </Text>
        </TouchableOpacity>
      ) }
    </View>
  );
}