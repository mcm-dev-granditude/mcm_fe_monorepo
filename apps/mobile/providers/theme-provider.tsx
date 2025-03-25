import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useColorScheme, View, Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Theme = "light" | "dark" | "system";
type EffectiveTheme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  isDarkMode: boolean;
  effectiveTheme: EffectiveTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  isDarkMode: false,
  effectiveTheme: "light",
  setTheme: () => null,
  toggleTheme: () => null
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({children}: PropsWithChildren) {
  const [theme, setThemeState] = useState<Theme>("system");
  const colorScheme = useColorScheme();

  const isDarkMode =
    theme === "dark" || (theme === "system" && colorScheme === "dark");

  const effectiveTheme: EffectiveTheme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme && (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system")) {
          setThemeState(savedTheme as Theme);
        }
      } catch (error) {
        console.error("Failed to load theme preference", error);
      }
    };

    void loadTheme();
  }, []);

  // Effect to override system appearance when not using system theme
  useEffect(() => {
    if (theme !== "system") {
      Appearance.setColorScheme(effectiveTheme);
    } else {
      Appearance.setColorScheme(null);
    }

    return () => {
      Appearance.setColorScheme(null);
    };
  }, [theme, effectiveTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    AsyncStorage.setItem("theme", newTheme).catch(error => {
      console.error("Failed to save theme preference", error);
    });
  };

  const toggleTheme = () => setTheme(effectiveTheme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{theme, isDarkMode, effectiveTheme, setTheme, toggleTheme}}>
      <View className={`flex-1 ${isDarkMode ? "dark" : ""}`}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
}