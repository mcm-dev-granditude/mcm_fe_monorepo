// src/cli/watch-tokens.js
const fs = require("fs");
const path = require("path");
const {exec} = require("child_process");
const chokidar = require("chokidar");

// Path to tokens directory
const tokensDir = path.resolve(__dirname, "../");

// Function to run the CSS generation
function generateCSS() {
  console.log("🔄 Tokens changed, regenerating CSS...");

  // First run the TypeScript compiler to update the dist files
  exec("pnpm tsc", (error) => {
    if (error) {
      console.error("❌ Error compiling TypeScript:", error);
      return;
    }

    // Then copy the CLI file and generate the CSS
    exec("pnpm run copy-cli && pnpm run build:css", (error) => {
      if (error) {
        console.error("❌ Error generating CSS:", error);
        return;
      }
      console.log("✅ CSS regenerated successfully!");
    });
  });
}

// Watch for changes to token files
const watcher = chokidar.watch([
  path.join(tokensDir, "index.ts"),
  path.join(tokensDir, "utils/**/*.ts")
], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true
});

// Generate CSS on file changes
watcher.on("change", (path) => {
  console.log(`📝 File ${path} has been changed`);
  generateCSS();
});

console.log("👀 Watching for token changes...");

// Initial build
generateCSS();