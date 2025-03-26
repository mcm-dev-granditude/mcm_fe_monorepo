import { baseAnimations as animations, baseColors as colors } from "./constants";
import { cssVariables } from "./generators/css-variables";
import { generateTailwindTheme } from "./generators/tailwind-theme";

export const tailwindTheme = generateTailwindTheme();

// Export everything
export * from "./constants";
export * from "./hooks/use-tokens";
export { colors, animations, cssVariables };

const tokens = {
  colors,
  cssVariables,
  tailwindTheme,
  animations
};

export default tokens;