# VueKit - Technical Preview

A new way to create MacOS apps.

# FAQ

> I see thousands of packages in node_modules, does my app need all of these?

No, the modules in node_modules are used for development tools, including linting (ESLint), typing (Typescript), and building (Vite/ESBuild). VueKit apps use only one external dependency at runtime, `@vue/runtime-core`.