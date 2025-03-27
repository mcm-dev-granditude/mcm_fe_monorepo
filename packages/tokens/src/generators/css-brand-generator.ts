import { appConfig } from "@repo/config";
import { generateBrandCSS } from "./css-generator";

const brandId = appConfig.brandId;
const cssContent = generateBrandCSS(brandId);
console.log(cssContent);