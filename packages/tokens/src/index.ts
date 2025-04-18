import { generateTailwindTheme } from "./generators/tailwind-theme";
import * as brandOverrides from "./brands/theme-registry";
import { BrandId } from "./brands/theme-registry";
import { BrandOverrides } from "./brands/get-brand-colors";

// Generate Tailwind theme
export const tailwindTheme = generateTailwindTheme();

// Export everything
export * from "./constants";
export * from "./brands/get-brand-color-token";
export { type BrandOverrides, brandOverrides, type BrandId };