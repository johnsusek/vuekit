# vuekit-tools

Tools used to generate Vuekit bridge and type files.

# gen-headers

Generates swift headers for AppKit classes. This data is used by ast-builder

`node index.js ../../data/frameworks.json ../../data/headers`

# ast-builder

Parses swift headers into an ast and store is json.

`swift run ast-builder ../../data/frameworks.json ../../data/headers ../../data/ast`

# attribute-list-builder

Parses swift headers into a list of attributes (i.e. unavailable, renamed, etc).

This data is used by macos-metadata-builder to build the swift jsexport
classes (specifically to hide unavailable or obsoleted decls).

`node index.js ../../data/frameworks.json ../../data/ast ../../data/attributes`

# macos-metadata-generator

Generates swift jsexport classes

See README in subfolder for more details.

# prune-jse

Attempts to compile swift jsexport classes and copies those that build to ../../vuekit/framework/Sources/exports,
the endpoint of this entire process. The jsexport classes will be compiled into a .framework (using vuekit/framework/build.sh)
that is published to npm w/ the vuekit-vue package and referenced in vuekit apps from their .config/xcodeproj-app.json file.

`node index.js`

# Dev

* Edit data/frameworks.json if you are adding a new framework
* Run gen-header, ast-builder and attribute-list-builder on framework to populate data/ folders
* Run macos-metadata-generator to populate data/swift/ folder
* Run prune-jse to copy over headers that compile to /vuekit/framework/ folder
* (Add any added files to the xcode project)
* `npm run build` in vuekit folder
