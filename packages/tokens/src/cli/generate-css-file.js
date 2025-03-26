const fs = require("fs");
const path = require("path");

// Dynamically require the compiled index.js file
const tokensModule = require("../index");

/**
 * Generate CSS and write to a file
 */
function writeCSS() {
  // Get CSS content (including any overrides that have been applied)
  const cssContent = tokensModule.getCssContent();

  // Get the package root directory
  const packageDir = path.resolve(__dirname, "../../");
  const cssDir = path.join(packageDir, "css");

  // Create css directory if it doesn't exist
  if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir, {recursive: true});
  }

  // Write the file
  const filePath = path.join(cssDir, "globals.css");
  fs.writeFileSync(filePath, cssContent);
  console.log(`Generated CSS file at: ${filePath}`);
}

// Execute the function
writeCSS();