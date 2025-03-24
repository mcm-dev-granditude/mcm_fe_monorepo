import type {PropsWithChildren, ReactElement} from "react";
import {useMemo} from "react";
import {StyleSheet, View} from "react-native";
import Animated, {interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset} from "react-native-reanimated";
import {cn} from "@repo/ui";

import {useBottomTabOverflow} from "@/components/ui/tab-bar-background";
import {useThemeColor} from "@/hooks/use-theme-color";
import {ColorToken} from "@repo/tokens";
import {ThemedAnimatedView} from "@/components/themed-animated-view";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: ColorToken;
  className?: string;
}>;

export default function ParallaxScrollView( {
                                              children,
                                              headerImage,
                                              headerBackgroundColor,
                                              className
                                            }: Props ) {
  const headerBgColor = useThemeColor( headerBackgroundColor );
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset( scrollRef );
  const bottom = useBottomTabOverflow();

  // Create dynamic background style with useMemo to avoid inline styles
  const headerBgStyle = useMemo( () => ( {
    backgroundColor: headerBgColor
  } ), [headerBgColor] );

  const headerAnimatedStyle = useAnimatedStyle( () => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          )
        },
        {
          scale: interpolate( scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1] )
        }
      ]
    };
  } );

  return (
    <View className="flex-1">
      <Animated.ScrollView
        ref={ scrollRef }
        scrollEventThrottle={ 16 }
        scrollIndicatorInsets={ {bottom} }
        contentContainerStyle={ {paddingBottom: bottom} }
      >
        <ThemedAnimatedView
          className="overflow-hidden"
          style={ [
            styles.header,
            headerBgStyle,
            headerAnimatedStyle
          ] }
        >
          { headerImage }
        </ThemedAnimatedView>
        <View className={ cn( "p-8 gap-4 overflow-hidden", className ) }>
          { children }
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create( {
  header: {
    height: HEADER_HEIGHT
  }
} );