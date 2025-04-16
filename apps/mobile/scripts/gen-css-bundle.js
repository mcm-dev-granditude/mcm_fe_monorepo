import path from "path";
import {fileURLToPath} from "url";
import generateCss from "../../../packages/tokens/src/cli/generate-css-file.js";
import {appConfig} from "../config/app-config.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  outputDir: "../app/styles",
  output: "globals.css",
  brandId: appConfig.brandId
};

generateCss(__dirname, config)
.then(() => process.exit(0))
.catch(() => process.exit(1));