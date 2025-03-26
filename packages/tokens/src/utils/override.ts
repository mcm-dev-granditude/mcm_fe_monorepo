import { baseColors, ChartColors, ThemeColors } from "../constants";
import deepmerge from "deepmerge"; // Note: lowercase import

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type BrandOverrides = {
  light?: DeepPartial<ThemeColors>;
  dark?: DeepPartial<ThemeColors>;
  chart?: DeepPartial<ChartColors>;
};

// Default exports with no overrides
let overrides: BrandOverrides = {};

export function applyOverrides(brandOverrides: BrandOverrides = {}) {
  overrides = brandOverrides;
}

export function getColors() {
  return {
    light: deepmerge(baseColors.light, overrides.light || {}),
    dark: deepmerge(baseColors.dark, overrides.dark || {}),
    chart: deepmerge(baseColors.chart, overrides.chart || {})
  };
}