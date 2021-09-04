#!/bin/bash

mkdir -p ../tools/xcodegen
cd ../tools/xcodegen

curl -s -o xcodegen.zip -L https://github.com/yonaskolb/XcodeGen/releases/download/$1/xcodegen.zip

unzip -qq -o xcodegen.zip

rm -f xcodegen.zip xcodegen/install.sh
