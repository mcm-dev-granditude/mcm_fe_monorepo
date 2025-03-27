import {build} from "esbuild";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Get the absolute path to the monorepo root
const rootDir = path.resolve(__dirname, "../../../../");
const inputFile = path.join(__dirname, "../generators/css-brand-generator.ts");

// The output file will be a JS bundle that can be executed directly
const outputFile = (outputPath) => {
  // Make sure outputPath is relative to the monorepo root
  const fullPath = path.isAbsolute(outputPath)
                   ? outputPath
                   : path.join(rootDir, outputPath);

  // Ensure directory exists
  const outputDir = path.dirname(fullPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
  }

  return path.join(outputDir, "tokens-bundle.js");
};

async function buildTokensBundle(outputPath) {
  const outfile = outputFile(outputPath);
  try {
    await build({
      entryPoints: [inputFile],
      bundle: true,
      platform: "node",
      outfile,
      format: "cjs",
      external: [],
      minify: false,
      sourcemap: false,
      tsconfig: path.join(rootDir, "packages/tokens/tsconfig.json"),
      define: {
        "process.env.NODE_ENV": "\"production\""
      },
      // Help esbuild resolve packages in a monorepo
      resolveExtensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      // Use proper node module resolution strategy from the root monorepo
      nodePaths: [path.join(rootDir, "node_modules")],
      // Add aliases for workspace packages
      alias: {
        "@repo/config": path.join(rootDir, "packages/config/index.ts")
      }
    });

    console.log("✅ Built tokens bundle successfully");
    return true;
  } catch (error) {
    console.error("Error building tokens bundle:", error);
    return false;
  }
}

export default buildTokensBundle;