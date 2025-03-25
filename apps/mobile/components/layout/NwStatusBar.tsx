import React, { FC } from "react";
import { StatusBar, StatusBarProps } from "expo-status-bar";
import { useTheme } from "@/providers/theme-provider";


const NwStatusBar: FC = (props: StatusBarProps) => {
  const {isDarkMode} = useTheme();

  return (
    <StatusBar style={isDarkMode ? 'light' : 'dark'} {...props} />
  );
};

export default NwStatusBar;
