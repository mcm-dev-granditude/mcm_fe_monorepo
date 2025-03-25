import type { FC } from "react";
import { View } from "react-native";
import { useTabInfo } from "@/hooks/use-tab-info";
import { SafeAreaView } from "react-native-safe-area-context";
import { NwText } from "@/components/nw-text";

const SuggestionsScreen: FC = () => {
  const tabInfo = useTabInfo();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1">
        <NwText variant="heading" className="text-foreground p-4">
           {tabInfo?.title} Screen
        </NwText>
      </View>
    </SafeAreaView>
  );
};

export default SuggestionsScreen;