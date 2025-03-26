// packages/tokens/src/generators/css-variables.ts
import { ChartColors, ThemeColors } from "../constants";
import { hexToHSL } from "../utils/hex-to-hsl";

export function generateCssVariables(
  theme: ThemeColors,
  chartColors?: ChartColors
): Record<string, string> {
  const cssVars: Record<string, string> = {};

  // Process all theme color properties
  Object.entries(theme).forEach(([key, value]) => {
    cssVars[`--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`] = hexToHSL(value);
  });

  cssVars["--radius"] = "0.5rem";

  // Add chart colors
  if (chartColors) {
    Object.entries(chartColors).forEach(([key, value]) => {
      cssVars[`--chart-${key}`] = hexToHSL(value);
    });
  }

  return cssVars;
}

export function generateCSSContent(vars: {
  light: Record<string, string>;
  dark: Record<string, string>
}): string {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    ${Object.entries(vars.light)
  .map(([key, value]) => `${key}: ${value};`)
  .join("\n    ")}
  }

  .dark {
    ${Object.entries(vars.dark)
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
}