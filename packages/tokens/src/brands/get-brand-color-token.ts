import { baseColors, ChartColors } from "../constants";
import { BrandId, themeRegistry } from "./theme-registry";
import { getBrandColors } from "./get-brand-colors";

export type ColorToken = keyof typeof baseColors | keyof typeof baseColors.dark;

type ThemeMode = "light" | "dark";

export function getBrandColorToken(
  brandId: BrandId,
  colorName: ColorToken,
  mode: ThemeMode = "light"
): string {
  const o = themeRegistry[brandId];
  const colors = getBrandColors(o);

  // Handle chart colors which are in a different structure
  if (colorName.startsWith("chart")) {
    const chartKey = colorName.replace("chart", "");
    return (colors.chart as ChartColors)[chartKey] || "#000000";
  }

  const themeColors = colors[mode] as Record<string, string>;
  return themeColors[colorName] || "#000000";
}