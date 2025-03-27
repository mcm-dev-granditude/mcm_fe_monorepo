import buildTokensBundle from "@repo/tokens/src/cli/compile-css-generator.js";
import {execSync} from "child_process";
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  outputDir: "../app/styles",
  output: "globals.css"
};

// Get the absolute paths
const outputDir = path.resolve(__dirname, config.outputDir);
const outputFile = path.join(outputDir, config.output);

async function main() {
  try {
    console.log("Building tokens bundle...");

    const tempBundleFile = path.join(__dirname, "temp-tokens-bundle.js");
    const bundleBuilt = await buildTokensBundle(tempBundleFile);

    if (!bundleBuilt) {
      process.exit(1);
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
  } catch (error) {
    console.error("Error generating CSS:", error.message);
    process.exit(1);
  }
}

main().then();