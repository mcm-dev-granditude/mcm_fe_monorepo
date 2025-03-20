import { nativeWindTheme } from '@repo/tokens/src'

/**
 * NativeWind configuration that can be shared between mobile apps
 */
export const nativeWindConfig = {
  theme: {
    extend: {
      colors: nativeWindTheme.colors,
      borderRadius: nativeWindTheme.borderRadius
      // Add any additional theme values specific to native
    }
  },
  // Enable dark mode
  darkMode: 'class',
  // Important to handle platform specifics
  plugins: []
}

interface CustomConfig {
  // eslint-disable-next-line
  theme?: Record<string, any>
  // eslint-disable-next-line
  plugins?: Record<string, any>[];
}

/**
 * Function to create a complete NativeWind config for a specific app
 * This allows individual apps to customize their config while sharing the base theme
 */
export const createNativeWindConfig = ( customConfig: CustomConfig ) => {
  return {
    ...nativeWindConfig,
    theme: {
      ...nativeWindConfig.theme,
      ...( customConfig.theme || {} ),
      extend: {
        ...nativeWindConfig.theme.extend,
        ...( customConfig.theme?.extend || {} )
      }
    },
    plugins: [
      ...( nativeWindConfig.plugins || [] ),
      ...( customConfig.plugins || [] )
    ]
  }
}

export default nativeWindConfig