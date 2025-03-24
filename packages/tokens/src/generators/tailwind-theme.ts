import {baseAnimations, baseColors} from "../constants";

export function generateTailwindTheme() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tailwindColors: Record<string, any> = {
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    background: "hsl(var(--background))",
    surface: "hsl(var(--background-surface))",
    foreground: "hsl(var(--foreground))",
    primary: {
      DEFAULT: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
      light: "hsl(var(--primary-light))"
    },
    secondary: {
      DEFAULT: "hsl(var(--secondary))",
      foreground: "hsl(var(--secondary-foreground))"
    },
    destructive: {
      DEFAULT: "hsl(var(--destructive))",
      foreground: "hsl(var(--destructive-foreground))"
    },
    muted: {
      DEFAULT: "hsl(var(--muted))",
      foreground: "hsl(var(--muted-foreground))"
    },
    accent: {
      DEFAULT: "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))"
    },
    popover: {
      DEFAULT: "hsl(var(--popover))",
      foreground: "hsl(var(--popover-foreground))"
    },
    card: {
      DEFAULT: "hsl(var(--card))",
      foreground: "hsl(var(--card-foreground))"
    },
    warning: {
      DEFAULT: "hsl(var(--warning))",
      foreground: "hsl(var(--warning-foreground))"
    },
    chart: {}
  };

  // Add chart colors
  Object.keys( baseColors.chart ).forEach( key => {
    tailwindColors.chart[key] = `hsl(var(--chart-${ key }))`;
  } );

  return {
    colors: tailwindColors,
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)"
    },
    keyframes: baseAnimations.keyframes,
    animation: baseAnimations.animation
  };
}