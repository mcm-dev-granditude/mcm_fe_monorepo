/** @type {import("tailwindcss").Config} */
module.exports = {
  // Include your app content and shared UI components
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"
  ],
  // NativeWind preset is required
  // eslint-disable-next-line no-undef,@typescript-eslint/no-require-imports
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: (function() {
        // eslint-disable-next-line no-undef,@typescript-eslint/no-require-imports
        return require("@repo/tokens").tailwindTheme.colors;
      })(),
      borderRadius: (function() {
        // eslint-disable-next-line no-undef,@typescript-eslint/no-require-imports
        return require("@repo/tokens").tailwindTheme.borderRadius;
      })()
    }
  },
  // Enable dark mode
  darkMode: "class"
};