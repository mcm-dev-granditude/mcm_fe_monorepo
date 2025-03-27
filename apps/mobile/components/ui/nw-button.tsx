import * as React from "react";
import { Pressable, type PressableProps, View } from "react-native";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants, cn } from "@repo/ui";
import { NwText } from "@/components/nw-text";

export interface NwButtonProps
  extends Omit<PressableProps, "children" | "style">,
    VariantProps<typeof buttonVariants> {
  textClassName?: string;
  children?: React.ReactNode;
}

const NwButton = React.forwardRef<React.ElementRef<typeof Pressable>, NwButtonProps>(
  ({className, variant, size, children, textClassName, ...props}, ref) => {

    return (
      <Pressable
        ref={ref}
        className={cn(buttonVariants({variant, size, className}))}
        android_ripple={{color: "rgba(0, 0, 0, 0.1)"}}
        {...props}
      >
        <View className="w-full h-full items-center justify-center">
          {typeof children === "string" ? (
            <NwText className={cn("text-center text-lg font-medium", textClassName)}>
              {children}
            </NwText>
          ) : (
            children
          )}
        </View>
      </Pressable>
    );
  }
);

NwButton.displayName = "NwButton";

export { NwButton };