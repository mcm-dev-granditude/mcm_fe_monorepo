import React, { FC, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

const NewsDetailScreen: FC = () => {
  const {id, title} = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title ? String(title) : `News ${id}`
    });
  }, [navigation, id, title]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Text>News Detail for ID: {id}</Text>
    </SafeAreaView>
  );
};

export default NewsDetailScreen;