"use strict";
// eslint-disable-next-line functional/prefer-immutable-types
const config = {
  globals: {},
  env: {
    commonjs: true,
    es6: true,
  },
  overrides: [],
  plugins: [
    "jest",
    "sonarjs",
    "functional",
    "@typescript-eslint",
    "prettier",
    "total-functions",
    "import",
    "spellcheck",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:total-functions/recommended",
    "typed-fp",
    "plugin:sonarjs/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "spellcheck/spell-checker": ["warn"],
    "no-console": [
      "error",
      { allow: ["info", "warn", "error", "trace", "debug"] },
    ],
    "functional/no-expression-statement": [
      "error",
      {
        ignorePattern: "(console.)(?=log|info|warn|debug|error|trace)",
        ignoreVoid: false,
      },
    ],
  },
  settings: {},
};
module.exports = config;
