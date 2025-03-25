import React, { FC } from "react";
import { StatusBar, StatusBarProps } from "expo-status-bar";
import { useTheme } from "@/providers/theme-provider";


const NwStatusBar: FC = (props: StatusBarProps) => {
  const {effectiveTheme} = useTheme();

  return (
    <StatusBar style={effectiveTheme} {...props} />
  );
};

export default NwStatusBar;
