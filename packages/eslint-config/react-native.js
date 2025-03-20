import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import globals from "globals";
import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use React Native.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const reactNativeConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "react-native": pluginReactNative,
    },
    settings: {
      react: { version: "detect" },
      "react-native/style-sheet-object-names": ["StyleSheet", "ViewStyle", "TextStyle", "ImageStyle"]
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",

      // Most important - explicitly set the exhaustive-deps rule
      "react-hooks/exhaustive-deps": "warn",

      // React Native specific rules that actually exist in the plugin
      "react-native/no-unused-styles": "warn",
      "react-native/no-inline-styles": "warn",
      "react-native/no-color-literals": "warn",
      "react-native/no-raw-text": ["warn", {
        "skip": ["ThemedText", "Text"]
      }],
      "react-native/no-single-element-style-arrays": "warn",

      // Ensure console warnings are active
      "no-console": ["warn", { "allow": ["warn", "error", "info"] }],
    },
  },
];