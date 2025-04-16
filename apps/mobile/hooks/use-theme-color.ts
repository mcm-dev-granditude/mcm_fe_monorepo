import { useTheme } from "@/providers/theme-provider";
import { BrandId, ColorToken, getBrandColorToken } from "@repo/tokens";
import { appConfig } from "@/config/app-config";

export function useThemeColor(colorName: ColorToken): string {
  const {effectiveTheme} = useTheme();
  return getBrandColorToken(appConfig.brandId as BrandId, colorName, effectiveTheme);
}