import { hexToHSL } from './utils/hex-to-hsl'

export const colors = {
  light: {
    background: '#ffffff',
    backgroundSurface: '#f8fafc',
    foreground: '#0f172a',
    card: '#ffffff',
    cardForeground: '#0f172a',
    popover: '#ffffff',
    popoverForeground: '#0f172a',
    primary: '#0ea5e9',
    primaryForeground: '#ffffff',
    secondary: '#f1f5f9',
    secondaryForeground: '#0f172a',
    muted: '#f1f5f9',
    mutedForeground: '#64748b',
    accent: '#f1f5f9',
    accentForeground: '#0f172a',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    border: '#e2e8f0',
    input: '#e2e8f0',
    ring: '#0ea5e9',
    warning: '#f59e0b',
    warningForeground: '#fffbeb',
  },
  dark: {
    background: '#0f172a',
    backgroundSurface: '#1e293b',
    foreground: '#f8fafc',
    card: '#1e293b',
    cardForeground: '#f8fafc',
    popover: '#1e293b',
    popoverForeground: '#f8fafc',
    primary: '#0ea5e9',
    primaryForeground: '#ffffff',
    secondary: '#334155',
    secondaryForeground: '#f8fafc',
    muted: '#334155',
    mutedForeground: '#94a3b8',
    accent: '#334155',
    accentForeground: '#f8fafc',
    destructive: '#7f1d1d',
    destructiveForeground: '#ffffff',
    border: '#475569',
    input: '#475569',
    ring: '#0ea5e9',
    warning: '#fbbf24',
    warningForeground: '#78350f',
  },
  // Chart colors for data visualization
  chart: {
    '1': '#ff7849',
    '2': '#0ea5e9',
    '3': '#13b176',
    '4': '#a855f7',
    '5': '#f43f5e',
  }
};

// CSS variables format for web
export const cssVariables = {
  light: {
    '--background': hexToHSL(colors.light.background),
    '--background-surface': hexToHSL(colors.light.backgroundSurface),
    '--foreground': hexToHSL(colors.light.foreground),
    '--card': hexToHSL(colors.light.card),
    '--card-foreground': hexToHSL(colors.light.cardForeground),
    '--popover': hexToHSL(colors.light.popover),
    '--popover-foreground': hexToHSL(colors.light.popoverForeground),
    '--primary': hexToHSL(colors.light.primary),
    '--primary-foreground': hexToHSL(colors.light.primaryForeground),
    '--secondary': hexToHSL(colors.light.secondary),
    '--secondary-foreground': hexToHSL(colors.light.secondaryForeground),
    '--muted': hexToHSL(colors.light.muted),
    '--muted-foreground': hexToHSL(colors.light.mutedForeground),
    '--accent': hexToHSL(colors.light.accent),
    '--accent-foreground': hexToHSL(colors.light.accentForeground),
    '--destructive': hexToHSL(colors.light.destructive),
    '--destructive-foreground': hexToHSL(colors.light.destructiveForeground),
    '--border': hexToHSL(colors.light.border),
    '--input': hexToHSL(colors.light.input),
    '--ring': hexToHSL(colors.light.ring),
    '--warning': hexToHSL(colors.light.warning),
    '--warning-foreground': hexToHSL(colors.light.warningForeground),
    '--radius': '0.5rem',
    '--chart-1': hexToHSL(colors.chart['1']),
    '--chart-2': hexToHSL(colors.chart['2']),
    '--chart-3': hexToHSL(colors.chart['3']),
    '--chart-4': hexToHSL(colors.chart['4']),
    '--chart-5': hexToHSL(colors.chart['5']),
  },
  dark: {
    '--background': hexToHSL(colors.dark.background),
    '--background-surface': hexToHSL(colors.dark.backgroundSurface),
    '--foreground': hexToHSL(colors.dark.foreground),
    '--card': hexToHSL(colors.dark.card),
    '--card-foreground': hexToHSL(colors.dark.cardForeground),
    '--popover': hexToHSL(colors.dark.popover),
    '--popover-foreground': hexToHSL(colors.dark.popoverForeground),
    '--primary': hexToHSL(colors.dark.primary),
    '--primary-foreground': hexToHSL(colors.dark.primaryForeground),
    '--secondary': hexToHSL(colors.dark.secondary),
    '--secondary-foreground': hexToHSL(colors.dark.secondaryForeground),
    '--muted': hexToHSL(colors.dark.muted),
    '--muted-foreground': hexToHSL(colors.dark.mutedForeground),
    '--accent': hexToHSL(colors.dark.accent),
    '--accent-foreground': hexToHSL(colors.dark.accentForeground),
    '--destructive': hexToHSL(colors.dark.destructive),
    '--destructive-foreground': hexToHSL(colors.dark.destructiveForeground),
    '--border': hexToHSL(colors.dark.border),
    '--input': hexToHSL(colors.dark.input),
    '--ring': hexToHSL(colors.dark.ring),
    '--warning': hexToHSL(colors.dark.warning),
    '--warning-foreground': hexToHSL(colors.dark.warningForeground),
    '--radius': '0.5rem',
    '--chart-1': hexToHSL(colors.chart['1']),
    '--chart-2': hexToHSL(colors.chart['2']),
    '--chart-3': hexToHSL(colors.chart['3']),
    '--chart-4': hexToHSL(colors.chart['4']),
    '--chart-5': hexToHSL(colors.chart['5']),
  }
};

// Custom animations we want to define
export const animations = {
  keyframes: {
    'accordion-down': {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' },
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' },
    },
    'slide-in': {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    'bounce-in': {
      '0%, 20%': {
        transform: 'scale(0.9)',
        opacity: '0',
      },
      '50%': {
        transform: 'scale(1.15)',
      },
      '75%': {
        transform: 'scale(0.95)',
        opacity: '1',
      },
      '100%': {
        transform: 'scale(1)',
        opacity: '1',
      },
    },
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
    'slide-in': 'slide-in 0.3s ease-out',
    'fade-in': 'fade-in 0.2s ease-out',
    'bounce-in': 'bounce-in 0.55s cubic-bezier(0.36, 0, 0.66, -0.56)',
  },
};

// Tailwind theme extension
export const tailwindTheme = {
  colors: {
    // CSS variable references for semantic colors
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    background: 'hsl(var(--background))',
    surface: 'hsl(var(--background-surface))',
    foreground: 'hsl(var(--foreground))',
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))',
    },
    secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))',
    },
    destructive: {
      DEFAULT: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))',
    },
    muted: {
      DEFAULT: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))',
    },
    accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))',
    },
    popover: {
      DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))',
    },
    card: {
      DEFAULT: 'hsl(var(--card))',
      foreground: 'hsl(var(--card-foreground))',
    },
    warning: {
      DEFAULT: 'hsl(var(--warning))',
      foreground: 'hsl(var(--warning-foreground))',
    },
    chart: {
      '1': 'hsl(var(--chart-1))',
      '2': 'hsl(var(--chart-2))',
      '3': 'hsl(var(--chart-3))',
      '4': 'hsl(var(--chart-4))',
      '5': 'hsl(var(--chart-5))',
    },
  },
  borderRadius: {
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)',
  },
  keyframes: animations.keyframes,
  animation: animations.animation,
};

// NativeWind theme (direct values, no CSS variables)
export const nativeWindTheme = {
  colors: {
    // Light theme colors (direct values)
    background: colors.light.background,
    surface: colors.light.backgroundSurface,
    foreground: colors.light.foreground,
    card: colors.light.card,
    'card-foreground': colors.light.cardForeground,
    popover: colors.light.popover,
    'popover-foreground': colors.light.popoverForeground,
    primary: colors.light.primary,
    'primary-foreground': colors.light.primaryForeground,
    secondary: colors.light.secondary,
    'secondary-foreground': colors.light.secondaryForeground,
    muted: colors.light.muted,
    'muted-foreground': colors.light.mutedForeground,
    accent: colors.light.accent,
    'accent-foreground': colors.light.accentForeground,
    destructive: colors.light.destructive,
    'destructive-foreground': colors.light.destructiveForeground,
    border: colors.light.border,
    input: colors.light.input,
    ring: colors.light.ring,
    warning: colors.light.warning,
    'warning-foreground': colors.light.warningForeground,
    'chart-1': colors.chart['1'],
    'chart-2': colors.chart['2'],
    'chart-3': colors.chart['3'],
    'chart-4': colors.chart['4'],
    'chart-5': colors.chart['5'],

    // Dark theme colors for NativeWind
    dark: {
      background: colors.dark.background,
      surface: colors.dark.backgroundSurface,
      foreground: colors.dark.foreground,
      card: colors.dark.card,
      'card-foreground': colors.dark.cardForeground,
      popover: colors.dark.popover,
      'popover-foreground': colors.dark.popoverForeground,
      primary: colors.dark.primary,
      'primary-foreground': colors.dark.primaryForeground,
      secondary: colors.dark.secondary,
      'secondary-foreground': colors.dark.secondaryForeground,
      muted: colors.dark.muted,
      'muted-foreground': colors.dark.mutedForeground,
      accent: colors.dark.accent,
      'accent-foreground': colors.dark.accentForeground,
      destructive: colors.dark.destructive,
      'destructive-foreground': colors.dark.destructiveForeground,
      border: colors.dark.border,
      input: colors.dark.input,
      ring: colors.dark.ring,
      warning: colors.dark.warning,
      'warning-foreground': colors.dark.warningForeground,
    },
  },
  // Border radius
  borderRadius: {
    lg: 8,       // 0.5rem in pixels
    md: 6,       // 0.375rem in pixels
    sm: 4,       // 0.25rem in pixels
    none: 0,
    full: 9999,
  },
};

// Default export
const tokens = {
  colors,
  cssVariables,
  tailwindTheme,
  nativeWindTheme,
  animations,
};

export default tokens;

export const cssPath = './css/globals.css';