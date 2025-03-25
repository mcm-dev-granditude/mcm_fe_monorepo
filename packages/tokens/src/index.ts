import { baseAnimations as animations, baseColors as colors } from "./constants";
import { cssVariables } from "./generators/css-variables";
import { generateTailwindTheme } from "./generators/tailwind-theme";
import { generateNativeWindTheme } from "./generators/nativewind-theme";

export const tailwindTheme = generateTailwindTheme();
export const nativeWindTheme = generateNativeWindTheme();

// Export everything
export * from "./constants";
export * from "./hooks/use-tokens";
export { colors, animations, cssVariables };

const tokens = {
  colors,
  cssVariables,
  tailwindTheme,
  nativeWindTheme,
  animations
};

export default tokens;