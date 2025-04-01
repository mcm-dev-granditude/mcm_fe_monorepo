const {getDefaultConfig} = require("expo/metro-config");
const {withNativeWind} = require("nativewind/metro");
const {wrapWithReanimatedMetroConfig} = require("react-native-reanimated/metro-config");
const path = require("path");

// Find the project and workspace directories
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

// Get the default config
let config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];

// 2. Let Metro know where to resolve packages
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules")
];

// 3. Disable hierarchical lookup to ensure consistent resolution
config.resolver.disableHierarchicalLookup = true;

// 4. Add custom resolver for workspace packages and WebView dependencies
config.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) => {
      const packageName = String(name);

      // Ensure react and react-native are always resolved from the mobile app
      // This is important for WebView compatibility
      if (packageName === "react" || packageName === "react-native") {
        return path.join(projectRoot, "node_modules", packageName);
      }

      // Handle workspace packages
      if (packageName.startsWith("@repo/")) {
        const namePart = packageName.split("/")[1];

        const packagePath = path.join(
          workspaceRoot,
          "packages",
          namePart
        );

        if (require("fs").existsSync(packagePath)) {
          return packagePath;
        }
      }

      // Fallback to node_modules
      return path.join(projectRoot, "node_modules", packageName);
    }
  }
);

// 5. Ensure we're not excluding any important file types
// This helps with loading assets in WebViews
config.resolver.assetExts = config.resolver.assetExts || [];
config.resolver.assetExts.push("db", "mp3", "ttf", "obj", "png", "jpg", "jpeg", "svg");

// 6. Apply NativeWind transformation
const nativeWindConfig = withNativeWind(config, {input: "./app/styles/globals.css"});

// Apply Reanimated transformation (must be last)
const finalConfig = wrapWithReanimatedMetroConfig(nativeWindConfig);

module.exports = finalConfig;