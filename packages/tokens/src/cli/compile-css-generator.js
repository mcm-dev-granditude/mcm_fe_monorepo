import {build} from "esbuild";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Get the absolute path to the monorepo root
const rootDir = path.resolve(__dirname, "../../../../");

const inputFile = path.join(__dirname, "../generators/css-brand-generator.ts");

/**
 * Builds the tokens bundle and outputs it to the specified path
 * @param {string} outputPath - Full path to the output file, or directory where the bundle should be created
 * @returns {Promise<boolean>} - Whether the build was successful
 */
async function buildTokensBundle(outputPath) {
  let outfile;

  // Handle both cases - if outputPath is a directory or a full file path
  if (path.extname(outputPath) === "") {
    // It's a directory, append the default filename
    outfile = path.join(outputPath, "tokens-bundle.js");
  } else {
    // It's already a file path
    outfile = outputPath;
  }

  // Ensure the directory exists
  const outputDir = path.dirname(outfile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
  }

  console.log("Outputting tokens bundle to:", outfile);

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