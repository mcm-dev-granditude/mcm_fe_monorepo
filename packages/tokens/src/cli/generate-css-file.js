// CommonJS version
const fs = require("fs");
const path = require("path");

// Dynamically require the compiled index.js file
const tokensModule = require("../index");
const {cssVariables} = tokensModule;

/**
 * Generate CSS content from the design tokens
 */
function generateCSSContent() {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    ${Object.entries(cssVariables.light)
  .map(([key, value]) => `${key}: ${value};`)
  .join("\n    ")}
  }

  .dark {
    ${Object.entries(cssVariables.dark)
  .map(([key, value]) => `${key}: ${value};`)
  .join("\n    ")}
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}`;
}

/**
 * Write the CSS to a file in the package's css directory
 */
function writeCSS() {
  const cssContent = generateCSSContent();
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