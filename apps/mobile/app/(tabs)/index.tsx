import { SafeAreaView } from "react-native-safe-area-context";
import { NwText } from "@/components/nw-text";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
        <NwText variant="heading" className="text-foreground p-4">
           Home Screen
        </NwText>
    </SafeAreaView>
  );
}