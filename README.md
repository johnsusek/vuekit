# VueKit - Technical Preview

A new way to create MacOS apps.

`npm init vuekit-app@latest`

# Dev Notes

* Suggested editor is VSCode with Volar, or any editor that supports typescript .vue SFCs. Vetur support for typescript isn't as good as Volar.

## Known Issues

* Viewing some classes in the Safari Inspector will crash the app because they send unsupported ObjC selectors to the class

# FAQ

> I see thousands of packages in node_modules, does my app need all of these?

No, VueKit apps use only one package, `@vue/runtime-core`, which is a pared-down subset of the full `vue` package. The modules in node_modules are used for development tools. Take a look at the generated javascript in the build/ directory to see the entirety of your app with dependencies included.