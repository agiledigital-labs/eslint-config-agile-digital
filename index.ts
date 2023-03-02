import type { TSESLint } from "@typescript-eslint/experimental-utils";

// eslint-disable-next-line functional/prefer-immutable-types
const config: TSESLint.Linter.Config = {
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
    "functional/no-expression-statements": [
      "error",
      {
        // Permit the following types of expressions to be used as statements (i.e. to have their results discarded)
        // * console.log() and friends
        // * React hooks (functions that start with `use`)
        ignorePattern:
          "(console.)(?=log|info|warn|debug|error|trace)|use[a-zA-Z]+",
        ignoreVoid: false,
      },
    ],
    "functional/functional-parameters": [
      "error",
      {
        // Permit React hooks (functions that start with `use`), which often have callbacks with no parameters.
        ignorePattern:
          "use[a-zA-Z]+",
      },
    ],
  },
  settings: {},
};

export = config;
