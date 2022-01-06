module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-shadow': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
  },
}
