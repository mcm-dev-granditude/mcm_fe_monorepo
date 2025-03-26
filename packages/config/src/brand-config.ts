import { applyOverrides, brandOverrides } from "@repo/tokens";

export function configureBrand(brand: string) {
  switch (brand) {
    case "test":
      applyOverrides(brandOverrides.testBrand);
      console.log("Applied test brand overrides");
      break;
    default:
      // No overrides for default brand
      applyOverrides({});
      console.log("Using default brand (no overrides)");
      break;
  }
}