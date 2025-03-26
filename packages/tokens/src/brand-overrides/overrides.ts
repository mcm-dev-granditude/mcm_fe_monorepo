import { BrandOverrides } from "../utils/override";
import { demoOverrides } from "./demo";

export type AvailableBrands = "default" | "demo";

export const overrides: Record<AvailableBrands, BrandOverrides> = {
  "default": {},
  "demo": demoOverrides
};