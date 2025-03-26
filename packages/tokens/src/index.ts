// packages/tokens/src/index.ts
import { generateTailwindTheme } from "./generators/tailwind-theme";
import * as brandOverrides from "./brands/theme-registry";
import { BrandId } from "./brands/theme-registry";
import { generateBrandCSS } from "./generators/css-generator";
import { BrandOverrides } from "./brands/get-brand-colors";

// Generate Tailwind theme
export const tailwindTheme = generateTailwindTheme();

// Export everything
export * from "./constants";
export * from "./brands/get-brand-color-token";
export { type BrandOverrides, brandOverrides, type BrandId };
export { generateBrandCSS };