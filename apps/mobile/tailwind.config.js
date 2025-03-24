/** @type {import("tailwindcss").Config} */
module.exports = {
  // Include your app content and shared UI components
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"
  ],
  // NativeWind preset is required
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Import colors from the tokens package using dynamic import to avoid require
      // We have to use require here since this is a CommonJS module, but we can make ESLint happy
      colors: (function() {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        return require("@repo/tokens").nativeWindTheme.colors;
      })(),
      borderRadius: (function() {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        return require("@repo/tokens").nativeWindTheme.borderRadius;
      })()
    }
  },
  // Enable dark mode
  darkMode: "class"
};