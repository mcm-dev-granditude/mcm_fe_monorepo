import { demoOverrides } from "./themes/demo";
import { BrandOverrides } from "./get-brand-colors";

export type BrandId = "default" | "demo";

export const themeRegistry: Record<BrandId, BrandOverrides> = {
  "default": {},
  "demo": demoOverrides
};