#!/bin/bash
set -e

APP_NAME="vuekit-testing-app"

mkdir -p ./tmp

node ../packages/create-vuekit-app/index.js ./tmp/$APP_NAME $APP_NAME
cd tmp/$APP_NAME

# Tests any post-install scripts
npm install

# Tests setup script, xcodegen, and vite build
npm run setup

echo "Test successful"

rm -rf ./$APP_NAME
