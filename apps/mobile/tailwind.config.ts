import { nativeWindConfig } from "@repo/config";

export default {
  // Include app content and shared UI components
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"
  ],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require("nativewind/preset"), nativeWindConfig]
};