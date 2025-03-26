const {getDefaultConfig} = require("expo/metro-config");
const {withNativeWind} = require("nativewind/metro");
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

// 4. Add custom resolver for workspace packages
config.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) => {
      const packageName = String(name);

      // Handle workspace packages
      if (packageName.startsWith("@repo/")) {
        const packagePath = path.join(
          workspaceRoot,
          "packages",
          packageName.replace("@repo/", "")
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

// Apply NativeWind transformation
const nativeWindConfig = withNativeWind(config, {input: "./app/styles/globals.css"});

module.exports = nativeWindConfig;