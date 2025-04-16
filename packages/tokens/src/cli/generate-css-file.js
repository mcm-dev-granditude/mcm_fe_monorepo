import {execSync} from "child_process";
import fs from "fs";
import path from "path";
import buildTokensBundle from "./compile-css-generator.js";


/**
 * Generates CSS file from tokens
 * @param {string} callerDir - The directory of the calling script (__dirname)
 * @param {Object} config - Configuration for the CSS generator
 * @param {string} config.outputDir - The relative path to the output directory from the calling script
 * @param {string} config.output - The filename for the output CSS file
 * @param {string} config.brandId - The brand ID to use for token generation
 * @returns {Promise<string>} Promise resolving to the path of the generated CSS file
 */
export async function generateCss(callerDir, config) {
  // Get the absolute paths
  const outputDir = path.resolve(callerDir, config.outputDir);
  const outputFile = path.join(outputDir, config.output);

  try {
    console.log("Building tokens bundle...");

    // Create a temporary bundle filename in the caller's directory
    const tempBundleFile = path.join(callerDir, "temp-tokens-bundle.js");

    // Build the tokens bundle and pass the brandId
    const bundleBuilt = await buildTokensBundle(tempBundleFile, config.brandId);

    if (!bundleBuilt) {
      throw new Error("Failed to build tokens bundle");
    }

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, {recursive: true});
    }

    console.log("Generating CSS...");
    // Execute the bundle to get the CSS
    const cssContent = execSync(`node ${tempBundleFile}`, {encoding: "utf8"});

    // Write the CSS to the output file
    fs.writeFileSync(outputFile, cssContent);

    // Clean up the bundle
    if (fs.existsSync(tempBundleFile)) {
      fs.unlinkSync(tempBundleFile);
    }

    console.log(`✅ Generated CSS file at: ${outputFile}`);
    return outputFile;
  } catch (error) {
    console.error("Error generating CSS:", error instanceof Error ? error.message : String(error));
    throw error;
  }
}

export default generateCss;