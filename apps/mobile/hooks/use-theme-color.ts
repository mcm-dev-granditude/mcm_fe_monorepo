import {useTheme} from "@/providers/theme-provider";
import {ColorToken, getColorToken} from "@repo/tokens";

export function useThemeColor( colorName: ColorToken ): string {
  const {effectiveTheme} = useTheme();
  return getColorToken( colorName, effectiveTheme );
}