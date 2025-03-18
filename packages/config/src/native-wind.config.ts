import { nativeWindTheme } from '@repo/tokens';

/**
 * NativeWind configuration that can be shared between mobile apps
 */
export const nativeWindConfig = {
  theme: {
    extend: {
      colors: nativeWindTheme.colors,
      borderRadius: nativeWindTheme.borderRadius,
      // Additional theme values that might be needed
      // NativeWind automatically includes Tailwind defaults for these
    },
  },
};

/**
 * Function to create a complete NativeWind config for a specific app
 * This allows individual apps to customize their config while sharing the base theme
 */
export const createNativeWindConfig = (customConfig = {}) => {
  return {
    ...nativeWindConfig,
    ...customConfig,
  };
};

export default nativeWindConfig;