#!/bin/bash

# Mobile App Development

#Due to conflicts between the strict pnpm module isolation needed for the web app
#and the specific dependency requirements of Expo, use the following command to
#start the mobile app:
#
#pnpm run start:safe

# Save current directory
CURRENT_DIR=$(pwd)

# Create a project-specific directory just for the problematic packages
mkdir -p .expo_deps

# Install the specific problematic dependencies using pnpm
cd .expo_deps
echo '{"name":"expo-deps","version":"1.0.0","private":true}' > package.json
pnpm install metro@0.80.1 expo-asset@~11.0.4

# Go back to project directory
cd "$CURRENT_DIR"

# Run Expo with modified NODE_PATH to prioritize our special modules
trap "rm -rf .expo_deps; exit" EXIT
NODE_PATH="$CURRENT_DIR/.expo_deps/node_modules:$NODE_PATH" pnpm expo start

