import type { FC } from "react";
import { View } from "react-native";
import { useTabInfo } from "@/hooks/use-tab-info";
import { SafeAreaView } from "react-native-safe-area-context";
import { NwText } from "@/components/nw-text";
import { useTheme } from "@/providers/theme-provider";
import { NwButton } from "@/components/ui/nw-button";

const LiveScoreScreen: FC = () => {
  const tabInfo = useTabInfo();
  const {toggleTheme, effectiveTheme} = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 align-middle ">
        <NwText
          variant="heading"
          className="text-foreground p-4"
        >
          {tabInfo?.title} Screen
        </NwText>
        <NwButton onPress={toggleTheme}>
          Toggle Theme! - {effectiveTheme}
        </NwButton>
      </View>
    </SafeAreaView>
  );
};

export default LiveScoreScreen;