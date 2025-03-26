import { BrandOverrides } from "../index";
import { BrandId, themeRegistry } from "../brands/theme-registry";
import { generateCSSContent, generateCssVariables } from "./css-variables";
import { getBrandColors } from "../brands/get-brand-colors";

const getCssVariables = (o: BrandOverrides) => {
  const colors = getBrandColors(o);
  return (
    {
      light: generateCssVariables(colors.light, colors.chart),
      dark: generateCssVariables(colors.dark, colors.chart)
    }
  );
};

export function generateBrandCSS(brandId: BrandId = "default"): string {
  const o = themeRegistry[brandId];
  const cssVariables = getCssVariables(o);
  return generateCSSContent(cssVariables);
}