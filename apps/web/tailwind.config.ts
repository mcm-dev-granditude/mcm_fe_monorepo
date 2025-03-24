import {tailwindConfig} from "@repo/config";

export default {
  presets: [tailwindConfig],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}"
  ]
};