import { Link as ExpoLink } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import React, { type ComponentProps } from "react";
import { GestureResponderEvent, Platform } from "react-native";
import { cn } from "@repo/ui";

type ExpoLinkProps = ComponentProps<typeof ExpoLink>;
type UnifiedLinkProps = ExpoLinkProps & {
  className?: string;
  isExternal?: boolean;
};

export function NwLink({
                         href,
                         className,
                         style,
                         isExternal = false,
                         ...rest
                       }: UnifiedLinkProps) {
  const handlePress = async (event: React.MouseEvent<HTMLAnchorElement> | GestureResponderEvent) => {
    if (isExternal && Platform.OS !== "web") {
      // Only handle isExternal links on native platforms
      event.preventDefault();
      // Use the string href for browser opening
      if (typeof href === "string") {
        await openBrowserAsync(href);
      }
    }

    // For internal links or web platform, use default behavior
    if (rest.onPress) {
      rest.onPress(event);
    }
  };

  return (
    <ExpoLink
      target={isExternal ? "_blank" : undefined}
      className={cn(className)}
      style={style}
      {...rest}
      href={href}
      onPress={handlePress}
    />
  );
}