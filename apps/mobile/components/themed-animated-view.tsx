import Animated, {AnimatedStyle} from "react-native-reanimated";
import {cn} from "@repo/ui";
import {StyleProp} from "react-native";

type ThemedAnimatedViewProps = {
  className?: string;
  animatedStyle?: AnimatedStyle;
  children: React.ReactNode;
  style?: StyleProp<any>;
};

export function ThemedAnimatedView( {
                                      className,
                                      animatedStyle,
                                      style,
                                      children
                                    }: ThemedAnimatedViewProps ) {
  return (
    <Animated.View
      className={ cn( className ) }
      style={ [style, animatedStyle] }
    >
      { children }
    </Animated.View>
  );
}