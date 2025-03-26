import { baseAnimations } from "./constants";
import { generateCSSContent, generateCssVariables } from "./generators/css-variables";
import { generateTailwindTheme } from "./generators/tailwind-theme";
import { applyOverrides, BrandOverrides, getColors } from "./utils/override";
import * as brandOverrides from "./brand-overrides/overrides";

const colors = getColors();

// Generate CSS variables using the potentially overridden colors
const cssVariables = {
  light: generateCssVariables(colors.light, colors.chart),
  dark: generateCssVariables(colors.dark, colors.chart)
};

// Generate Tailwind theme
export const tailwindTheme = generateTailwindTheme();

// Export everything
export * from "./constants";
export * from "./hooks/use-tokens";
export { colors, baseAnimations as animations, cssVariables };
export { applyOverrides, type BrandOverrides, brandOverrides };

// Export for CSS generation
export const getCssContent = () => generateCSSContent(cssVariables);