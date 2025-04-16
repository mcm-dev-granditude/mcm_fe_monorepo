import path from "path";
import {fileURLToPath} from "url";
import generateAppConfigFile from "../../../packages/config/src/cli/generate-app-config-file.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get brand ID from command line arguments or environment variables
const brandId = process.argv[2] || process.env.BRAND_ID || "default";

const config = {
  outputDir: "../config",
  output: "app-config.js",
  brandId: brandId
};

generateAppConfigFile(__dirname, config)
.then(() => process.exit(0))
.catch(() => process.exit(1));