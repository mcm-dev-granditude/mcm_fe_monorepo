import {build} from "esbuild";
import fs from "fs";
import path from "path";


/**
 * Generates a JavaScript configuration file for the specified brand
 * @param {string} callerDir - The directory of the calling script (__dirname)
 * @param {Object} config - Configuration for the app config generator
 * @param {string} config.outputDir - The relative path to the output directory from the calling script
 * @param {string} config.output - The filename for the output JS file
 * @param {string} config.brandId - The brand ID to use
 * @returns {Promise<string>} Promise resolving to the path of the generated config file
 */
export async function generateAppConfigFile(callerDir, config) {
  // Get the absolute paths
  const outputDir = path.resolve(callerDir, config.outputDir);
  const outputFile = path.join(outputDir, config.output || "app-config.js");
  const brandId = config.brandId || "default";

  console.log(`Generating app configuration for brand: ${brandId}`);

  try {
    // Get the absolute path to the monorepo root
    const rootDir = path.resolve(callerDir, "../../../");

    // Create a temporary bundle filename in the caller's directory
    const tempBundleFile = path.join(callerDir, "temp-config-bundle.js");
    const tempExtractorFile = path.join(callerDir, "temp-config-extractor.ts");

    // Write a temporary file that imports the appConfig and exports the specific brand config
    fs.writeFileSync(tempExtractorFile, `
      import { appConfig } from "${rootDir}/packages/config/src/config/app-config";
      
      const brandConfig = appConfig["${brandId}"];
      
      const fullConfig = {
        ...brandConfig,
        brandId: "${brandId}"
      };
      
      console.log(\`export const appConfig = \${JSON.stringify(fullConfig, null, 2)};\`);
    `);

    await build({
      entryPoints: [tempExtractorFile],
      bundle: true,
      platform: "node",
      outfile: tempBundleFile,
      format: "cjs",
      external: [],
      minify: false,
      sourcemap: false,
      tsconfig: path.join(rootDir, "packages/config/tsconfig.json"),
      resolveExtensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      nodePaths: [path.join(rootDir, "node_modules")],
      alias: {
        "@repo/config": path.join(rootDir, "packages/config/index.ts"),
        "@repo/tokens": path.join(rootDir, "packages/tokens/src/index.ts")
      }
    });

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, {recursive: true});
    }

    console.log("Executing bundled config extractor...");
    // Use dynamic import instead of require
    const {execSync} = await import("child_process");
    const jsModule = execSync(`node ${tempBundleFile}`, {encoding: "utf8"});

    // Write the JavaScript module to the output file
    fs.writeFileSync(outputFile, jsModule);

    // Clean up the temporary files
    if (fs.existsSync(tempBundleFile)) {
      fs.unlinkSync(tempBundleFile);
    }
    if (fs.existsSync(tempExtractorFile)) {
      fs.unlinkSync(tempExtractorFile);
    }

    console.log(`✅ Generated app configuration at: ${outputFile}`);
    return outputFile;
  } catch (error) {
    console.error("Error generating app config:", error instanceof Error ? error.message : String(error));
    throw error;
  }
}

export default generateAppConfigFile;