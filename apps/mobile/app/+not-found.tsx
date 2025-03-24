import {Link, Stack} from "expo-router";
import {View} from "react-native";
import {ThemedText} from "@/components/themed-text";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={ {title: "Oops!"} } />
      <View className="flex-1 items-center justify-center p-5 bg-background">
        <ThemedText variant="title">This screen doesn&#39;t exist.</ThemedText>
        <Link
          href="/"
          className="mt-4 py-4"
        >
          <ThemedText variant="link">Go to home screen!</ThemedText>
        </Link>
      </View>
    </>
  );
}