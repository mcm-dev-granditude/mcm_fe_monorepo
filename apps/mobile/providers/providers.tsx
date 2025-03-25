import type { FC, PropsWithChildren } from "react";
import { BottomSheetProvider } from "@/providers/bottom-sheet-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { NativeWindDarkMode } from "@/styles/dark-mode";
import { ColorSchemeName } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";

interface ProvidersProps extends PropsWithChildren {
  colorScheme: ColorSchemeName;
}

const Providers: FC<ProvidersProps> = ({children, colorScheme}) => {

  return (
    <NavigationThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeProvider>
        <NativeWindDarkMode colorScheme={colorScheme}>
          <BottomSheetProvider>
            {children}
          </BottomSheetProvider>
        </NativeWindDarkMode>
      </ThemeProvider>
    </NavigationThemeProvider>
  );
};

export default Providers;
