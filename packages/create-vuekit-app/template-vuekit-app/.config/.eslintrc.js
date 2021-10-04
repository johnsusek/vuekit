// This file is used by your editor to ensure consistent
// formatting of your VueKit code.
//
// You can also run `npm run lint` to check formatting
// from the command line (e.g. as part of an automated workflow).

module.exports = {
  root: true,

  env: {
    es2020: true
  },

  ignorePatterns: ["node_modules/**/*.vue"],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue']
  },

  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],

  rules: {
    // Rather than create our own config for VueKit, we start with
    // the airbnb base config and modify what we need, typically
    // turning off or relaxing rules.
    'comma-dangle': ['warn', 'never'],
    'consistent-return': 'off',
    'dot-notation': 'warn',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'max-len': 'off',
    'no-bitwise': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-debugger': 'warn',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'warn',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'quote-props': 'warn',

    // Relax some typescript-eslint rules
    '@typescript-eslint/no-explicit-any': 'off',

    // These rules set in airbnb-base are better checked by the ts compiler
    'constructor-super': 'off',
    'getter-return': 'off',
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'off',
    'no-func-assign': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-redeclare': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'valid-typeof': 'off',
    'import/named': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',

    // Relax some of the vue3-recommended rules
    'vue/valid-v-model': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/prop-name-casing': 'off'
  }
};
