import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

interface ProgressBarProps {
  progress: number;
  isLoading: boolean;
  color: string;
}

export function ProgressBar({progress, isLoading, color}: ProgressBarProps) {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: progress,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [progress, progressAnimation]);

  return (
    <View className="h-1 w-full bg-surface overflow-hidden">
      <Animated.View
        className="h-full"
        style={[
          {backgroundColor: color},
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