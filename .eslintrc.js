module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
    commonjs: true
  },
  extends: [
    'eslint:recommended'
    // Remove React extends for now to simplify
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'warn'
  }
};