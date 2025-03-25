import { Image, Platform, View } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { NwText } from "@/components/nw-text";
import { Card } from "@/components/card";
import { ThemeSwitcher } from "@/components/layout/theme-switcher/theme-switcher";
import logo from "@/assets/images/icon.png";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor="muted"
      headerImage={
        <Image
          source={logo}
          className="absolute bottom-0 left-0 h-[178px] w-[290px]"
        />
      }
    >
      <View className="flex-row items-center gap-2 ">
        <NwText variant="title">Welcome!</NwText>
      </View>

      <View className="gap-2 mb-2">
        <NwText variant="subheading">Step 1: Try it</NwText>
        <NwText variant="body">
          <NwText
            variant="body"
            className="font-semibold"
          >
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12"
            })}
          </NwText>
          <NwText>to open developer tools.</NwText>
        </NwText>
      </View>


      <View className="gap-2 mb-2">
        <Card
          title="Card"
          description="This is a card"
        />
        <Card
          title="Card"
          description="This is a card"
        />
        <Card
          title="Card"
          description="This is a card"
        />
      </View>

      <ThemeSwitcher />
    </ParallaxScrollView>
  );
}