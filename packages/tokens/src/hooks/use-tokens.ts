import { baseAnimations, baseColors, ChartColors, ThemeColors } from "../constants";
import { cssVariables } from "../generators/css-variables";
import { generateTailwindTheme } from "../generators/tailwind-theme";
import { generateNativeWindTheme } from "../generators/nativewind-theme";

type ColorTokens = {
  light: ThemeColors;
  dark: ThemeColors;
  chart: ChartColors;
};

export type ColorToken = keyof typeof baseColors | keyof typeof baseColors.dark;

type ThemeMode = "light" | "dark";

// Generate all theme objects for export
export const tokens = {
  colors: baseColors,
  cssVariables,
  tailwindTheme: generateTailwindTheme(),
  nativeWindTheme: generateNativeWindTheme(),
  animations: baseAnimations
};

/**
 * This hook provides direct access to tokens
 */
export function useTokens() {
  return {
    colors: tokens.colors as ColorTokens,
    nativeWindTheme: tokens.nativeWindTheme,
    animations: tokens.animations
  };
}

/**
 * A simpler hook that only provides color tokens based on the theme
 */
export function useColorTokens() {
  return tokens.colors as ColorTokens;
}

/**
 * Get a specific color from the tokens
 * @param colorName The color name from the tokens
 * @param mode The theme mode ('light' or 'dark')
 */
export function getColorToken(
  colorName: string,
  mode: ThemeMode = "light"
): string {
  // Handle chart colors which are in a different structure
  if (colorName.startsWith("chart")) {
    const chartKey = colorName.replace("chart", "");
    return (tokens.colors.chart as ChartColors)[chartKey] || "#000000";
  }

  const themeColors = tokens.colors[mode] as Record<string, string>;
  return themeColors[colorName] || "#000000";
}