#!/bin/bash

echo
echo "Starting VueKit first-time setup"
echo

echo "[1/3] Installing development packages..."
npm install --silent 1>/dev/null

echo "[2/3] Building initial bundle..."
npm run build --silent

echo "[3/3] Generating Xcode project..."
npm run xcodegenerate --silent 1>/dev/null

echo
echo "VueKit setup is done. Your .xcodeproj file has been generated."
echo
echo "After editing a .vue component, use \`npm run build\`, then ⌘+R in Xcode."
echo
