import * as React from "react";
import { Text, type TextProps } from "react-native";
import { cn, textVariants } from "@repo/ui";

export type TextVariant = "body" | "title" | "heading" | "subheading" | "caption" | "link"

export type ThemedTextProps = TextProps & {
  className?: string;
  variant?: TextVariant;
}

export function NwText({
                         className,
                         style,
                         variant = "body",
                         ...otherProps
                       }: ThemedTextProps) {
  return (
    <Text
      className={cn(textVariants({variant}), className)}
      style={style}
      {...otherProps}
    />
  );
}