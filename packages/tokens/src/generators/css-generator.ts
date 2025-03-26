import { applyOverrides, getCssContent } from "../index";
import { AvailableBrands, overrides } from "../brand-overrides/overrides";

export function generateBrandCSS(brandId: AvailableBrands = "default"): string {
  // Reset any previous overrides
  applyOverrides({});

  switch (brandId) {
    case "demo":
      applyOverrides(overrides.demo);
      break;
    default:
      break;
  }

  // Generate and return the CSS
  return getCssContent();
}