module.exports = {
  settings: {
    'vetur.completion.autoImport': false,
    'vetur.completion.tagCasing': 'initial',
    'vetur.experimental.templateInterpolationService': true,
    'vetur.format.defaultFormatter.css': 'none',
    'vetur.format.defaultFormatter.js': 'vscode-typescript',
    'vetur.format.defaultFormatter.less': 'none',
    'vetur.format.defaultFormatter.postcss': 'none',
    'vetur.format.defaultFormatter.pug': 'none',
    'vetur.format.defaultFormatter.sass': 'none',
    'vetur.format.defaultFormatter.scss': 'none',
    'vetur.format.defaultFormatter.stylus': 'none',
    'vetur.format.defaultFormatter.ts': 'vscode-typescript',
    'vetur.validation.style': false,
    'vetur.validation.templateProps': true
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
