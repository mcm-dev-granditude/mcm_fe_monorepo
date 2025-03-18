import { hexToHSL } from './utils/hex-to-hsl';

type ThemeColors = {
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

type ChartColors = {
  [key: string]: string;
};

const baseColors = {
  light: {
    background: '#ffffff',
    backgroundSurface: '#f9f5f5',
    foreground: '#0f172a',
    card: '#ffffff',
    cardForeground: '#0f172a',
    popover: '#ffffff',
    popoverForeground: '#0f172a',
    primary: '#c1002a',
    primaryForeground: '#ffffff',
    primaryLight: '#ef0808',
    secondary: '#f8edef',
    secondaryForeground: '#0f172a',
    muted: '#f8edef',
    mutedForeground: '#64748b',
    accent: '#e8c7ce',
    accentForeground: '#0f172a',
    destructive: '#ef4444',
    destructiveForeground: '#ffffff',
    border: '#e8d4d8',
    input: '#e8d4d8',
    ring: '#c1002a',
    warning: '#f59e0b',
    warningForeground: '#fffbeb'
  } as ThemeColors,

  dark: {
    background: '#1a1214',
    backgroundSurface: '#231a1d',
    foreground: '#f8fafc',
    card: '#231a1d',
    cardForeground: '#f8fafc',
    popover: '#231a1d',
    popoverForeground: '#f8fafc',
    primary: '#c1002a',
    primaryForeground: '#ffffff',
    primaryLight: '#ef0808',
    secondary: '#3a1f25',
    secondaryForeground: '#f8fafc',
    muted: '#3a1f25',
    mutedForeground: '#94a3b8',
    accent: '#71242f',
    accentForeground: '#f8fafc',
    destructive: '#7f1d1d',
    destructiveForeground: '#ffffff',
    border: '#471a24',
    input: '#471a24',
    ring: '#c1002a',
    warning: '#fbbf24',
    warningForeground: '#78350f'
  } as ThemeColors,

  chart: {
    '1': '#c1002a',
    '2': '#0ea5e9',
    '3': '#13b176',
    '4': '#9c2649',
    '5': '#e85a73'
  } as ChartColors
};

// Animations definition
const baseAnimations = {
  keyframes: {
    'accordion-down': {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' }
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' }
    },
    'slide-in': {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' }
    },
    'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    'bounce-in': {
      '0%, 20%': {
        transform: 'scale(0.9)',
        opacity: '0'
      },
      '50%': {
        transform: 'scale(1.15)'
      },
      '75%': {
        transform: 'scale(0.95)',
        opacity: '1'
      },
      '100%': {
        transform: 'scale(1)',
        opacity: '1'
      }
    }
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
    'slide-in': 'slide-in 0.3s ease-out',
    'fade-in': 'fade-in 0.2s ease-out',
    'bounce-in': 'bounce-in 0.55s cubic-bezier(0.36, 0, 0.66, -0.56)'
  }
};

// Automatically generate CSS variables from baseColors
function generateCssVariables(theme: ThemeColors): Record<string, string> {
  const cssVars: Record<string, string> = {};

  // Process all theme color properties
  Object.entries(theme).forEach(([key, value]) => {
    cssVars[`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`] = hexToHSL(value);
  });

  cssVars['--radius'] = '0.5rem';

  // Add chart colors
  Object.entries(baseColors.chart).forEach(([key, value]) => {
    cssVars[`--chart-${key}`] = hexToHSL(value);
  });

  return cssVars;
}

// Generate the CSS variables for both themes
const cssVariables = {
  light: generateCssVariables(baseColors.light),
  dark: generateCssVariables(baseColors.dark)
};

// Generate Tailwind theme with CSS variable references
function generateTailwindTheme() {
  const tailwindColors: Record<string, any> = {
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    background: 'hsl(var(--background))',
    surface: 'hsl(var(--background-surface))',
    foreground: 'hsl(var(--foreground))',
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))',
      light: 'hsl(var(--primary-light))'
    },
    secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))'
    },
    destructive: {
      DEFAULT: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))'
    },
    muted: {
      DEFAULT: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))'
    },
    accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))'
    },
    popover: {
      DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))'
    },
    card: {
      DEFAULT: 'hsl(var(--card))',
      foreground: 'hsl(var(--card-foreground))'
    },
    warning: {
      DEFAULT: 'hsl(var(--warning))',
      foreground: 'hsl(var(--warning-foreground))'
    },
    chart: {}
  };

  // Add chart colors
  Object.keys(baseColors.chart).forEach(key => {
    tailwindColors.chart[key] = `hsl(var(--chart-${key}))`;
  });

  return {
    colors: tailwindColors,
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    keyframes: baseAnimations.keyframes,
    animation: baseAnimations.animation
  };
}

// Generate NativeWind theme with direct values
function generateNativeWindTheme() {
  const lightColors: Record<string, string> = {};
  const darkColors: Record<string, string> = {};

  // Process light theme colors
  Object.entries(baseColors.light).forEach(([key, value]) => {
    const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    lightColors[kebabKey] = value;
  });

  // Process dark theme colors
  Object.entries(baseColors.dark).forEach(([key, value]) => {
    const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    darkColors[kebabKey] = value;
  });

  // Add chart colors to light theme
  Object.entries(baseColors.chart).forEach(([key, value]) => {
    lightColors[`chart-${key}`] = value;
  });

  return {
    colors: {
      ...lightColors,
      dark: darkColors
    },
    borderRadius: {
      lg: 8,       // 0.5rem in pixels
      md: 6,       // 0.375rem in pixels
      sm: 4,       // 0.25rem in pixels
      none: 0,
      full: 9999
    }
  };
}

// Generate all theme objects
export const colors = baseColors;
export const animations = baseAnimations;
export { cssVariables };
export const tailwindTheme = generateTailwindTheme();
export const nativeWindTheme = generateNativeWindTheme();

// Default export
const tokens = {
  colors,
  cssVariables,
  tailwindTheme,
  nativeWindTheme,
  animations
};

export default tokens;