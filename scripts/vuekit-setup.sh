#!/bin/bash

echo
echo "Starting VueKit first-time setup"
echo

echo "[1/2] Building initial bundle..."
npm run build --silent

echo "[2/2] Generating Xcode project..."
npm run xcodegenerate --silent 1>/dev/null

echo
echo "VueKit setup is done. Your .xcodeproj file has been generated."
echo
echo "After editing a .vue component, use \`npm run build\`, then ⌘+R in Xcode."
echo
echo "Use \`npm run watch\` to automatically re-build your bundle."
echo
