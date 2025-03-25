import type { FC, PropsWithChildren } from "react";
import { BottomSheetProvider } from "@/providers/bottom-sheet-provider";
import { ThemeProvider, useTheme } from "@/providers/theme-provider";
import { NativeWindDarkMode } from "@/styles/dark-mode";
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";

const NavigationThemeConnector: FC<PropsWithChildren> = ({ children }) => {
  const { effectiveTheme } = useTheme();

  return (
    <NavigationThemeProvider value={effectiveTheme === "dark" ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationThemeProvider>
  );
};

type ProvidersProps = PropsWithChildren

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <NavigationThemeConnector>
        <NativeWindDarkMode>
          <BottomSheetProvider>
            {children}
          </BottomSheetProvider>
        </NativeWindDarkMode>
      </NavigationThemeConnector>
    </ThemeProvider>
  );
};

export default Providers;