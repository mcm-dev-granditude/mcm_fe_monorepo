import tokens, { colors } from '..'

type ThemeColors = Record<string, string>;
type ChartColors = Record<string, string>;

type ColorTokens = {
  light: ThemeColors;
  dark: ThemeColors;
  chart: ChartColors;
};

export type ColorToken = keyof typeof colors | keyof typeof colors.dark;

type ThemeMode = 'light' | 'dark';

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
  mode: ThemeMode = 'light'
): string {
  // Handle chart colors which are in a different structure
  if (colorName.startsWith('chart')) {
    const chartKey = colorName.replace('chart', '');
    return (tokens.colors.chart as ChartColors)[chartKey] || '#000000';
  }

  const themeColors = tokens.colors[mode] as Record<string, string>;
  return themeColors[colorName] || '#000000';
}