import { SafeAreaView } from "react-native-safe-area-context";
import { NwText } from "@/components/nw-text";
import { Pressable } from "react-native";
import { useTheme } from "@/providers/theme-provider";

export default function HomeScreen() {
  const {toggleTheme} = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <NwText
        variant="heading"
        className="text-foreground p-4"
      >
        Home Screen
      </NwText>
      <Pressable
        onPress={toggleTheme}
      >
        <NwText variant="heading">Toggle theme</NwText>
      </Pressable>
    </SafeAreaView>
  );
}