import { config as baseConfig } from "@repo/eslint-config/base";

export default [
  ...baseConfig,
  {
    ignores: ["src/cli/**/*.js"]
  }
];