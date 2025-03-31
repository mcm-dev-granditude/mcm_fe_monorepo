module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", {jsxImportSource: "nativewind"}],
      "nativewind/babel"
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./",
            "@repo/ui": "../../packages/ui/src",
            "@repo/config": "../../packages/config",
            "@repo/tokens": "../../packages/tokens"
          }
        }
      ]
    ]
  };
};