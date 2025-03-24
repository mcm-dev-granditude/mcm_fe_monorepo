export type ThemeColors = {
  background: string;
  backgroundSurface: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  primaryLight: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  warning: string;
  warningForeground: string;
};

export type ChartColors = {
  [key: string]: string;
};

export const baseColors = {
  light: {
    background: "#ffffff",
    backgroundSurface: "#f9f5f5",
    foreground: "#0f172a",
    card: "#ffffff",
    cardForeground: "#0f172a",
    popover: "#ffffff",
    popoverForeground: "#0f172a",
    primary: "#c1002a",
    primaryForeground: "#ffffff",
    primaryLight: "#ef0808",
    secondary: "#f8edef",
    secondaryForeground: "#0f172a",
    muted: "#f8edef",
    mutedForeground: "#64748b",
    accent: "#e8c7ce",
    accentForeground: "#0f172a",
    destructive: "#ef4444",
    destructiveForeground: "#ffffff",
    border: "#e8d4d8",
    input: "#e8d4d8",
    ring: "#c1002a",
    warning: "#f59e0b",
    warningForeground: "#fffbeb"
  } as ThemeColors,

  dark: {
    background: "#1a1214",
    backgroundSurface: "#231a1d",
    foreground: "#f8fafc",
    card: "#231a1d",
    cardForeground: "#f8fafc",
    popover: "#231a1d",
    popoverForeground: "#f8fafc",
    primary: "#c1002a",
    primaryForeground: "#ffffff",
    primaryLight: "#ef0808",
    secondary: "#3a1f25",
    secondaryForeground: "#f8fafc",
    muted: "#3a1f25",
    mutedForeground: "#94a3b8",
    accent: "#71242f",
    accentForeground: "#f8fafc",
    destructive: "#7f1d1d",
    destructiveForeground: "#ffffff",
    border: "#471a24",
    input: "#471a24",
    ring: "#c1002a",
    warning: "#fbbf24",
    warningForeground: "#78350f"
  } as ThemeColors,

  chart: {
    "1": "#c1002a",
    "2": "#0ea5e9",
    "3": "#13b176",
    "4": "#9c2649",
    "5": "#e85a73"
  } as ChartColors
};

// Animations definition
export const baseAnimations = {
  keyframes: {
    "accordion-down": {
      from: {height: "0"},
      to: {height: "var(--radix-accordion-content-height)"}
    },
    "accordion-up": {
      from: {height: "var(--radix-accordion-content-height)"},
      to: {height: "0"}
    },
    "slide-in": {
      "0%": {transform: "translateY(20px)", opacity: "0"},
      "100%": {transform: "translateY(0)", opacity: "1"}
    },
    "fade-in": {
      "0%": {opacity: "0"},
      "100%": {opacity: "1"}
    },
    "bounce-in": {
      "0%, 20%": {
        transform: "scale(0.9)",
        opacity: "0"
      },
      "50%": {
        transform: "scale(1.15)"
      },
      "75%": {
        transform: "scale(0.95)",
        opacity: "1"
      },
      "100%": {
        transform: "scale(1)",
        opacity: "1"
      }
    }
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    "slide-in": "slide-in 0.3s ease-out",
    "fade-in": "fade-in 0.2s ease-out",
    "bounce-in": "bounce-in 0.55s cubic-bezier(0.36, 0, 0.66, -0.56)"
  }
};
