import {build} from "esbuild";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../../..");

// Create a temporary file that imports and uses the tokens package
const tempInputFile = path.join(__dirname, "temp-tokens-entry.ts");
fs.writeFileSync(tempInputFile, `
// Import the functions we need
import { generateBrandCSS } from "@repo/tokens";
import { appConfig } from "@repo/config";

// Generate CSS and output it
const brandId = appConfig.brandId;
const cssContent = generateBrandCSS(brandId);
console.log(cssContent);
`);

// The output file will be a JS bundle that can be executed directly
const outputFile = path.join(__dirname, "tokens-bundle.js");

async function buildTokensBundle() {
  try {
    await build({
      entryPoints: [tempInputFile],
      bundle: true,
      platform: "node",
      outfile: outputFile,
      format: "cjs",
      external: [], // Bundle everything
      minify: false,
      sourcemap: false,
      tsconfig: path.join(rootDir, "packages/tokens/tsconfig.json"),
      define: {
        "process.env.NODE_ENV": "\"production\""
      },
      // Help esbuild resolve packages in a monorepo
      resolveExtensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      // Fix: Use proper node module resolution strategy
      nodePaths: [path.join(rootDir, "node_modules")],
      // Add aliases for workspace packages
      alias: {
        "@repo/tokens": path.join(rootDir, "packages/tokens/src/index.ts"),
        "@repo/config": path.join(rootDir, "packages/config/index.ts")
      }
    });

    // Clean up
    fs.unlinkSync(tempInputFile);

    console.log("✅ Built tokens bundle successfully");
    return true;
  } catch (error) {
    console.error("Error building tokens bundle:", error);
    // Clean up on error
    if (fs.existsSync(tempInputFile)) {
      fs.unlinkSync(tempInputFile);
    }
    return false;
  }
}

export default buildTokensBundle;