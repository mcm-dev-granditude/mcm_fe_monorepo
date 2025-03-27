import { SafeAreaView } from "react-native";
import { NwText } from "@/components/nw-text";
import { NwButton } from "@/components/ui/nw-button";
import * as React from "react";
import { buttonVariants, cn } from "@repo/ui";

export default function HomeScreen() {
  const className = cn(buttonVariants({variant: "default", size: "default", className: ""}));
  console.log(className);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <NwText
        variant="heading"
        className="text-foreground p-4"
      >
        Home Screen
      </NwText>

      <NwButton
        id="livescore"
      >
        Live Score
      </NwButton>
    </SafeAreaView>
  );
}