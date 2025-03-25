import { baseColors, ThemeColors } from "../constants";
import { hexToHSL } from "../utils/hex-to-hsl";

export function generateCssVariables(theme: ThemeColors): Record<string, string> {
  const cssVars: Record<string, string> = {};

  // Process all theme color properties
  Object.entries(theme).forEach(([key, value]) => {
    cssVars[`--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`] = hexToHSL(value);
  });

  cssVars["--radius"] = "0.5rem";

  // Add chart colors
  Object.entries(baseColors.chart).forEach(([key, value]) => {
    cssVars[`--chart-${key}`] = hexToHSL(value);
  });

  return cssVars;
}

export const cssVariables = {
  light: generateCssVariables(baseColors.light),
  dark: generateCssVariables(baseColors.dark)
};

export const generateCSSContent = (): string => {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    ${Object.entries(cssVariables.light)
  .map(([key, value]) => `${key}: ${value};`)
  .join("\n    ")}
  }

  .dark {
    ${Object.entries(cssVariables.dark)
  .map(([key, value]) => `${key}: ${value};`)
  .join("\n    ")}
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}`;
};