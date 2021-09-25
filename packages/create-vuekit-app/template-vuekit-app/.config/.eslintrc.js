// This file is used by your editor to ensure consistent
// formatting of your VueKit code.

// You can also run `npm run lint` to check formatting
// from the command line (e.g. as part of an automated workflow).

module.exports = {
  root: true,

  env: {
    es2020: true
  },

  ignorePatterns: ["src/components/**/*.vue"],

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
    // VueKit specific opinionated rules that differ from airbnb-base
    'comma-dangle': ['warn', 'never'],

    // Relax some of the airbnb-base rules
    'max-len': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-plusplus': 'off',
    'no-debugger': 'error',
    'prefer-const': 'off',
    'lines-between-class-members': 'off',

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
