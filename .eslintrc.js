// This file is used by your editor to ensure consistent
// formatting of your VueKit code.

// You can also run `npm run lint` to check formatting
// from the command line (e.g. as part of an automated workflow).

module.exports = {
  root: true,

  env: {
    es2020: true
  },

  ignorePatterns: ['types/**/*.ts'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue']
  },

  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],

  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle': ['warn', 'never'],
    'consistent-return': 'off',
    'constructor-super': 'off',
    'dot-notation': 'off',
    'getter-return': 'off',
    'import/extensions': 'off',
    'import/named': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'no-bitwise': 'off',
    'no-console': 'off',
    'no-const-assign': 'off',
    'no-continue': 'off',
    'no-debugger': 'warn',
    'no-dupe-args': 'off',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'off',
    'no-empty': 'off',
    'no-func-assign': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-redeclare': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'warn',
    'no-shadow': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'no-use-before-define': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'quote-props': 'off',
    'valid-typeof': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-unused-components': 'warn',
    'vue/prop-name-casing': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/valid-v-model': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 4,
        multiline: true,
        consistent: true
      },
      ObjectPattern: {
        minProperties: 5,
        multiline: true,
        consistent: true
      },
      ImportDeclaration: {
        minProperties: 5,
        multiline: true,
        consistent: true
      },
      ExportDeclaration: {
        minProperties: 5,
        multiline: true,
        consistent: true
      },
    }]
  }
};
