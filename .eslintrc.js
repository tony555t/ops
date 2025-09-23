module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'no-undef': 'off'
  },
  globals: {
    require: 'readonly',
    process: 'readonly',
    test: 'readonly',
    expect: 'readonly',
    describe: 'readonly',
    it: 'readonly'
  }
};