module.exports = {
  settings: {
    'vetur.validation.templateProps': true,
    'vetur.completion.autoImport': false,
    'vetur.completion.tagCasing': 'initial',
    'vetur.experimental.templateInterpolationService': true,
    'vetur.validation.style': false,
    'vetur.format.defaultFormatter.css': 'none',
    'vetur.format.defaultFormatter.js': 'vscode-typescript',
    'vetur.format.defaultFormatter.ts': 'vscode-typescript',
    'vetur.format.defaultFormatter.less': 'none',
    'vetur.format.defaultFormatter.postcss': 'none',
    'vetur.format.defaultFormatter.pug': 'none',
    'vetur.format.defaultFormatter.sass': 'none',
    'vetur.format.defaultFormatter.scss': 'none',
    'vetur.format.defaultFormatter.stylus': 'none'
  },
  projects: [
    {
      root: './',
      globalComponents: [
        './src/components/**/*.vue',
        './node_modules/vuekit-vue/src/components/**/*.vue'
      ]
    }
  ]
};
