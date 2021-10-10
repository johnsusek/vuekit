#!/bin/bash
set -e

APP_NAME="vuekit-testing-app"

mkdir -p ./tmp

node ../create-vuekit-app/index.js ./tmp/$APP_NAME $APP_NAME
cd tmp/$APP_NAME

# Tests any post-install scripts
npm install

# Tests xcodegen, and vite build
npm run build

echo "Test successful"

rm -rf ./$APP_NAME
