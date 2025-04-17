import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

interface ProgressBarProps {
  progress: number;
  isLoading: boolean;
  color: string;
}

export function ProgressBar({progress, isLoading, color}: ProgressBarProps) {
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const surface = useThemeColor("backgroundSurface");

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: progress,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [progress, progressAnimation]);

  return (
    <View style={[styles.wrapper, {backgroundColor: surface}]}>
      <Animated.View
        style={[
          {backgroundColor: color, height: "100%"},
          {
            width: progressAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"]
            }),
            opacity: isLoading ? 1 : 0
          }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {height: 2, width: "100%", overflow: "hidden"}
});