import type { TSESLint } from "@typescript-eslint/utils";

// This lint config is used for test the combination of base and react config.
// It only extends settings from base and react eslint config.

// eslint-disable-next-line functional/prefer-immutable-types
const config: TSESLint.Linter.Config = {
  globals: {},
  env: {
    es6: true,
    browser: true,
  },
  overrides: [],
  plugins: ["react", "react-hooks", "jsx-a11y"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["./index.js", "./react.js"],
  rules: {},
  settings: {},
};

export = config;
