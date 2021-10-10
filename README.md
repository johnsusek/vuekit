# VueKit - Technical Preview

A new way to create MacOS apps.

`npm init vuekit-app@latest`

# Dev Notes

* Suggested editor is VSCode with Volar, or any editor that supports typescript .vue SFCs. Vetur support for typescript isn't as good as Volar.

## Known Issues

* Viewing some classes in the Safari Inspector will crash the app because they send unsupported ObjC selectors to the class

# FAQ

> I see thousands of packages in node_modules, does my app need all of these?

No, the modules in node_modules are used for development tools, including linting (ESLint), typing (Typescript), and building (Vite/ESBuild). VueKit apps use only one external dependency at runtime, `@vue/runtime-core`.