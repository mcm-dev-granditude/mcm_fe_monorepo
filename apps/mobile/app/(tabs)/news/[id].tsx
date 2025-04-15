import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

const NewsDetailScreen: FC = () => {
  const {id} = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Text>News Detail for ID: {id}</Text>
    </SafeAreaView>
  );
};

export default NewsDetailScreen;