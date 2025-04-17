import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExternalLink, X } from "lucide-react-native";

interface BrowserHeaderProps {
  hostname: string;
  textColor: string;
  onClose: () => void;
  onOpenExternal: () => void;
}

export function BrowserHeader({hostname, textColor, onClose, onOpenExternal}: BrowserHeaderProps) {
  return (
    <View
      className="flex-row items-center px-4 py-3 border-b border-border"
      style={styles.header}
    >
      <TouchableOpacity
        onPress={onClose}
        className="p-2 rounded-full mr-3"
        activeOpacity={0.7}
        hitSlop={{top: 15, right: 15, bottom: 15, left: 15}}
      >
        <X
          size={20}
          color={textColor}
        />
      </TouchableOpacity>

      <View className="flex-1 flex-row items-center px-3 py-2 rounded-full bg-surface">
        <Text
          className="text-sm flex-1 text-foreground"
          numberOfLines={1}
        >
          {hostname}
        </Text>
      </View>

      <TouchableOpacity
        onPress={onOpenExternal}
        className="p-2 ml-3"
        activeOpacity={0.7}
        hitSlop={{top: 15, right: 15, bottom: 15, left: 15}}
      >
        <ExternalLink
          size={20}
          color={textColor}
        />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    paddingVertical: 10
  }
});