import {Stack} from "expo-router";
import {View} from "react-native";
import {NwText} from "@/components/nw-text";
import {NwLink} from "@/components/nw-link";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={ {title: "Oops!"} } />
      <View className="flex-1 items-center justify-center p-5 bg-background">
        <NwText variant="title">This screen doesn&#39;t exist.</NwText>
        <NwLink
          href="/"
          className="mt-4 py-4"
        >
          <NwText variant="link">Go to home screen!</NwText>
        </NwLink>
      </View>
    </>
  );
}