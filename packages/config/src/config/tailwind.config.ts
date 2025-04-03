import type { Config } from "tailwindcss";
import { tailwindTheme } from "@repo/tokens";

export const tailwindConfig = {
  darkMode: ["class"],
  content: [],
  theme: {
    extend: tailwindTheme
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
