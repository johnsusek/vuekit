#!/bin/bash

rm -rf ./VueKit.xcodeproj
/Users/john/Code/my-vuekit-app/node_modules/vuekit-vue/vendor/xcodegen/bin/xcodegen generate
rm -rf ./VueKit.framework
xcodebuild -quiet
cp -R build/Debug/VueKit.framework .
rm -rf build
