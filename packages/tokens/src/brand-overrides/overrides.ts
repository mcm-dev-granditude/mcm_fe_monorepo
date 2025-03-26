import { BrandOverrides } from "../utils/override";

export type AvailableBrands = "default" | "demo";

const demoOverrides: BrandOverrides = {
  light: {
    primary: "#0088cc",
    primaryLight: "#33aadd",
    ring: "#0088cc",
    accent: "#bbdefb"
  },
  dark: {
    primary: "#0088cc",
    primaryLight: "#33aadd",
    ring: "#0088cc",
    accent: "#0d47a1"
  },
  chart: {
    "1": "#0088cc"
  }
};

export const overrides: Record<AvailableBrands, BrandOverrides> = {
  "default": {},
  "demo": demoOverrides
};