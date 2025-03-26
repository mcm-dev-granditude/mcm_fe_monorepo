const fs = require("fs");
const path = require("path");
const {generateBrandCSS} = require("@repo/tokens");
const {appConfig} = require("@repo/config");

// Get the brand ID from the app config
const brandId = appConfig.brandId;

// Generate the CSS for this brand
const cssContent = generateBrandCSS(brandId);

// Determine the output directory and ensure it exists
const outputDir = path.resolve(__dirname, "../styles");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, {recursive: true});
}

// Write the CSS file
const outputFile = path.join(outputDir, "globals.css");
fs.writeFileSync(outputFile, cssContent);

console.log(`✅ Generated CSS file for brand "${brandId}" at: ${outputFile}`);