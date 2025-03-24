import {baseColors} from "../constants";

export function generateNativeWindTheme() {
  const lightColors: Record<string, string> = {}
  const darkColors: Record<string, string> = {}

  // Process light theme colors
  Object.entries( baseColors.light ).forEach( ( [ key, value ] ) => {
    const kebabKey = key.replace( /([A-Z])/g, '-$1' ).toLowerCase()
    lightColors[kebabKey] = value
  } )

  // Process dark theme colors
  Object.entries( baseColors.dark ).forEach( ( [ key, value ] ) => {
    const kebabKey = key.replace( /([A-Z])/g, '-$1' ).toLowerCase()
    darkColors[kebabKey] = value
  } )

  // Add chart colors to light theme
  Object.entries( baseColors.chart ).forEach( ( [ key, value ] ) => {
    lightColors[`chart-${ key }`] = value
  } )

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
  }
}