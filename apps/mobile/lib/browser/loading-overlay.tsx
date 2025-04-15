import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

interface LoadingOverlayProps {
  isVisible: boolean;
  color: string;
}

export function LoadingOverlay({isVisible, color}: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <View
      style={StyleSheet.absoluteFill}
      className="justify-center items-center bg-background bg-opacity-50"
      pointerEvents="none"
    >
      <ActivityIndicator
        size="large"
        color={color}
      />
    </View>
  );
}