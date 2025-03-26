import { useTheme } from "@/providers/theme-provider";
import { ColorToken, getBrandColorToken } from "@repo/tokens";
import { appConfig } from "@repo/config";

export function useThemeColor(colorName: ColorToken): string {
  const {effectiveTheme} = useTheme();
  return getBrandColorToken(appConfig.brandId, colorName, effectiveTheme);
}