module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", {jsxImportSource: "nativewind"}],
      "nativewind/babel"
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './',
            '@repo': '../../packages',
          },
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
        },
      ]]
  };
};