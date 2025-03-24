import {Image, Platform, View} from "react-native";

import {Collapsible} from "@/components/collapsible";
import {NwLink} from "@/components/nw-link";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import {NwText} from "@/components/nw-text";
import {NwIcon} from "@/components/nw-icon";
import {ChevronRight} from "lucide-react-native";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor="muted"
      headerImage={
        <NwIcon icon={ ChevronRight } />
      }
    >
      <View className="flex-row gap-2">
        <NwText variant="title">Explore</NwText>
      </View>

      <NwText variant="body">
        This app includes example code to help you get started.
      </NwText>

      <Collapsible title="File-based routing">
        <NwText variant="body">
          This app has two screens:{ " " }
          <NwText
            variant="body"
            className="font-semibold"
          >app/(tabs)/index.tsx</NwText> and{ " " }
          <NwText
            variant="body"
            className="font-semibold"
          >app/(tabs)/explore.tsx</NwText>
        </NwText>
        <NwText variant="body">
          The layout file in <NwText
          variant="body"
          className="font-semibold"
        >app/(tabs)/_layout.tsx</NwText>{ " " }
          sets up the tab navigator.
        </NwText>
        <NwLink href="https://docs.expo.dev/router/introduction">
          <NwText variant="link">Learn more</NwText>
        </NwLink>
      </Collapsible>

      <Collapsible title="Android, iOS, and web support">
        <NwText variant="body">
          You can open this project on Android, iOS, and the web. To open the web version, press{ " " }
          <NwText
            variant="body"
            className="font-semibold"
          >w</NwText> in the terminal running this project.
        </NwText>
      </Collapsible>

      <Collapsible title="Images">
        <NwText variant="body">
          For static images, you can use the <NwText
          variant="body"
          className="font-semibold"
        >@2x</NwText> and{ " " }
          <NwText
            variant="body"
            className="font-semibold"
          >@3x</NwText> suffixes to provide files for
          different screen densities
        </NwText>
        <Image
          source={ require( "@/assets/images/react-logo.png" ) }
          className="self-center"
        />
        <NwLink href="https://reactnative.dev/docs/images">
          <NwText variant="link">Learn more</NwText>
        </NwLink>
      </Collapsible>

      <Collapsible title="Custom fonts">
        <NwText variant="body">
          Open <NwText
          variant="body"
          className="font-semibold"
        >app/_layout.tsx</NwText> to see how to load{ " " }
          <NwText className="font-[SpaceMono]">
            custom fonts such as this one.
          </NwText>
        </NwText>
        <NwLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <NwText variant="link">Learn more</NwText>
        </NwLink>
      </Collapsible>

      <Collapsible title="Light and dark mode components">
        <NwText variant="body">
          This template has light and dark mode support. The{ " " }
          <NwText
            variant="body"
            className="font-semibold"
          >
            useColorScheme()</NwText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </NwText>
        <NwLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <NwText variant="link">Learn more</NwText>
        </NwLink>
      </Collapsible>

      <Collapsible title="Animations">
        <NwText variant="body">
          This template includes an example of an animated component. The{ " " }
          <NwText
            variant="body"
            className="font-semibold"
          >components/HelloWave.tsx</NwText> component uses
          the powerful <NwText
          variant="body"
          className="font-semibold"
        >react-native-reanimated</NwText>{ " " }
          library to create a waving hand animation.
        </NwText>
        { Platform.select( {
          ios: (
            <NwText variant="body">
              The <NwText
              variant="body"
              className="font-semibold"
            >components/ParallaxScrollView.tsx</NwText>{ " " }
              component provides a parallax effect for the header image.
            </NwText>
          )
        } ) }
      </Collapsible>
    </ParallaxScrollView>
  );
}