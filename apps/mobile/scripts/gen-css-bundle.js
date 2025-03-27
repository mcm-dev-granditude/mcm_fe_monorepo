import generateCss from "@repo/tokens/src/cli/generate-css-file.js";
import path from "path";
import {fileURLToPath} from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  outputDir: "../app/styles",
  output: "globals.css"
};

generateCss(__dirname, config)
.then(() => process.exit(0))
.catch(() => process.exit(1));