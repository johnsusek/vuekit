# vuekit-tools

Tools used to generate Vuekit bridge and type files.

## gen-headers

`node index.js ../../data/frameworks.json ../../data/headers`

Generates swift headers for framework classes. This data is used by ast-builder

## ast-builder

`swift run ast-builder ../../data/frameworks.json ../../data/headers ../../data/ast`

Parses swift headers into an ast and store is json. This data is used by attribute-list builder

## attribute-list-builder

`node index.js ../../data/frameworks.json ../../data/ast ../../data/attributes`

Parses swift ast into a list of attributes (i.e. unavailable, renamed, etc).

This also generates aliases.json and structs.json to augment macos-metadata-generator
with additional declarations only available by parsing the Swift AST.

This data is used by macos-metadata-builder to build the swift jsexport
classes (specifically to hide unavailable or obsoleted decls).

## macos-metadata-generator

Generates swift jsexport classes

See README in the macos-metadata-generator project for more details.

## prune-jse

`node index.js`

Attempts to compile swift jsexport classes, and copies those that build to ../../vueframework/Sources/exports.

The jsexport classes are published to npm and referenced in a project's .config/xcodeproj-framework.json file.


# Adding a Framework

## Pre-requisites
* Clone local copies of the vuekit-vue and macos-metadata-generator projects
* rm -rf node_modules/vuekit-vue in your vuekit app and then manually use `ln -s` to link to your copy (npm link seems to have problems)
* Generate an xcodeproj from the macos-metadata-generator clang project.
  - Edit scheme in xcode to add required cmd-line params, or import below file (Manage Schemes -> ⚙ -> Import):
  - https://gist.githubusercontent.com/johnsusek/7d7b16c40d7ee32b51ff3627ddaaefb5/raw/472f36d36180d51d06f825bb1bfc3ab371f2867a/objc-metadata-generator.xcscheme

## Generating
* Edit data/frameworks.json and add your framework
* Run gen-headers, ast-builder and attribute-list-builder to populate data/ folders
* Add your framework to the macos-metadata-generator whitelist file
* Run macos-metadata-generator to generate bridge, ts and vue files
* Run prune-jse to copy over headers that compile to the framework/ folder
  - This will attempt to build and automatically fix any issues it finds.
  - You may need to make modifications to macos-metadata-generator, if some of the .swift classes in your framework aren't compiling.
  - You may also need to comment out certain fields in your classes if they reference unsupported frameworks. E.g. if your framework has a CKRecord field in a class, but CloudKit is not a supported framework, you will need to comment out that field (or add the other framework :]).
* Build the framework in your app (`npm run build:framework`) (make sure xcodeproj-framework.json references your local copy)
