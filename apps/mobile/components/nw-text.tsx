import { Text, type TextProps } from "react-native";
import { cn } from "@repo/ui";

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
  const variantClasses = {
    body: "text-base leading-normal text-foreground",
    title: "text-4xl font-bold leading-tight text-foreground",
    heading: "text-2xl font-bold text-foreground",
    subheading: "text-xl font-semibold text-foreground",
    caption: "text-sm text-muted-foreground",
    link: "text-base underline text-primary"
  };

  return (
    <Text
      className={cn(variantClasses[variant], className)}
      style={style}
      {...otherProps}
    />
  );
}