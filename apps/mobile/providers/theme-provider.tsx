import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useColorScheme, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Theme = "light" | "dark" | "system";
type EffectiveTheme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  isDarkMode: boolean;
  effectiveTheme: EffectiveTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  isDarkMode: false,
  effectiveTheme: "light",
  setTheme: () => null
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

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    AsyncStorage.setItem("theme", newTheme).catch(error => {
      console.error("Failed to save theme preference", error);
    });
  };

  return (
    <ThemeContext.Provider value={{theme, isDarkMode, effectiveTheme, setTheme}}>
      <View className={`flex-1 ${isDarkMode ? "dark" : ""}`}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
}