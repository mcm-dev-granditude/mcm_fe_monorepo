import {Image, Platform, View} from "react-native";

import {Collapsible} from "@/components/collapsible";
import {ExternalLink} from "@/components/external-link";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import {ThemedText} from "@/components/themed-text";
import {ThemedIcon} from "@/components/themed-icon";
import {ChevronRight} from "lucide-react-native";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor="muted"
      headerImage={
        <ThemedIcon icon={ ChevronRight } />
      }
    >
      <View className="flex-row gap-2">
        <ThemedText variant="title">Explore</ThemedText>
      </View>

      <ThemedText variant="body">
        This app includes example code to help you get started.
      </ThemedText>

      <Collapsible title="File-based routing">
        <ThemedText variant="body">
          This app has two screens:{ " " }
          <ThemedText
            variant="body"
            className="font-semibold"
          >app/(tabs)/index.tsx</ThemedText> and{ " " }
          <ThemedText
            variant="body"
            className="font-semibold"
          >app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText variant="body">
          The layout file in <ThemedText
          variant="body"
          className="font-semibold"
        >app/(tabs)/_layout.tsx</ThemedText>{ " " }
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText variant="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Android, iOS, and web support">
        <ThemedText variant="body">
          You can open this project on Android, iOS, and the web. To open the web version, press{ " " }
          <ThemedText
            variant="body"
            className="font-semibold"
          >w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Images">
        <ThemedText variant="body">
          For static images, you can use the <ThemedText
          variant="body"
          className="font-semibold"
        >@2x</ThemedText> and{ " " }
          <ThemedText
            variant="body"
            className="font-semibold"
          >@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image
          source={ require( "@/assets/images/react-logo.png" ) }
          className="self-center"
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText variant="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Custom fonts">
        <ThemedText variant="body">
          Open <ThemedText
          variant="body"
          className="font-semibold"
        >app/_layout.tsx</ThemedText> to see how to load{ " " }
          <ThemedText className="font-[SpaceMono]">
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText variant="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Light and dark mode components">
        <ThemedText variant="body">
          This template has light and dark mode support. The{ " " }
          <ThemedText
            variant="body"
            className="font-semibold"
          >
            useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText variant="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Animations">
        <ThemedText variant="body">
          This template includes an example of an animated component. The{ " " }
          <ThemedText
            variant="body"
            className="font-semibold"
          >components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText
          variant="body"
          className="font-semibold"
        >react-native-reanimated</ThemedText>{ " " }
          library to create a waving hand animation.
        </ThemedText>
        { Platform.select( {
          ios: (
            <ThemedText variant="body">
              The <ThemedText
              variant="body"
              className="font-semibold"
            >components/ParallaxScrollView.tsx</ThemedText>{ " " }
              component provides a parallax effect for the header image.
            </ThemedText>
          )
        } ) }
      </Collapsible>
    </ParallaxScrollView>
  );
}