Welcome to your VueKit App!

# Getting Started

```bash
npm install
npm run build
npm run app
```

# Tips

* In Safari: Develop -> Your Computer Name -> Automatically Show Web Inspector for JSContexts
* Run Safari before your app starts to attach the dev tools
* Check terminal and Safari console for error messages


# Declarative Xcode Project

It's recommended not to add your .xcodeproj into source control, because the many small diffs caused by even minor changes can be troublesome to track. See the [xcodegen](https://github.com/yonaskolb/XcodeGen) [spec](https://github.com/yonaskolb/XcodeGen/blob/master/Docs/ProjectSpec.md) and [usage docs](https://github.com/yonaskolb/XcodeGen/blob/master/Docs/Usage.md) for how to customize your `.config/xcodeproj-app.json` file. When a new developer builds your project, an .xcodeproj will be generated for them based on this file. If you want to commit your .xcodeproj files, uncomment the appropriate line in `.gitignore`.
