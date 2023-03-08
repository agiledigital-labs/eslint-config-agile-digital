import type { TSESLint } from "@typescript-eslint/utils";

// eslint-disable-next-line functional/prefer-immutable-types
const config: TSESLint.Linter.Config = {
  globals: {},
  env: {
    commonjs: true,
    es6: true,
  },
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
    "no-template-curly-in-string": ["error"],
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
          "(console.)(?=log|info|warn|debug|error|trace)|^use[a-zA-Z]+",
        ignoreVoid: false,
      },
    ],
    "functional/functional-parameters": [
      "error",
      {
        // Permit React hooks (functions that start with `use`), which often have callbacks with no parameters.
        ignorePattern: "^use[a-zA-Z]+",
      },
    ],
  },
  overrides: [
    {
      files: ["*.test.ts"],
      rules: {
        "functional/no-return-void": "off",
        "functional/functional-parameters": "off",
        "functional/no-expression-statements": "off",
        "functional/no-throw-statements": "off",
        "functional/no-conditional-statements": "off",
        "functional/prefer-immutable-types": [
          "error",
          { enforcement: "ReadonlyDeep" },
        ],
      },
    },
  ],
  settings: {
    immutability: {
      overrides: [
        // https://github.com/RebeccaStevens/is-immutable-type#default-overrides
        // Note: When providing custom overrides, the default ones will not be used.
        // Be sure to include the default overrides in your custom overrides if you
        // don't want to lose them. You can obtain them with getDefaultOverrides().
        { name: "Map", to: "Mutable" },
        { name: "Set", to: "Mutable" },
        { name: "Date", to: "Mutable" },
        { name: "URL", to: "Mutable" },
        { name: "URLSearchParams", to: "Mutable" },
        {
          name: "ReadonlyArray",
          to: "Immutable",
          from: "ReadonlyDeep",
        },
        {
          // From fp-ts
          // export interface JsonArray extends ReadonlyArray<Json> {}
          name: "JsonArray",
          to: "Immutable",
        },
        {
          // From fp-ts
          // export declare type Json = boolean | number | string | null | JsonArray | JsonRecord
          name: "Json",
          to: "Immutable",
        },
        {
          // From io-ts
          // export interface Errors extends Array<ValidationError> {}
          name: "Errors",
          to: "Immutable",
          from: "Mutable",
        },
        {
          // From io-ts
          // A readonly codec. Not the type of the value represented by the codec. The type of the codec itself.
          // I.e., the result of calling `T.readonly(...)`.
          name: "ReadonlyC",
          to: "Immutable",
          from: "Mutable",
        },
        {
          // From https://github.com/agiledigital/readonly-types
          // TODO work out why this is being detected wrong
          name: "ReadonlyDate",
          to: "Immutable",
        },
        {
          // From fp-ts
          name: "ReadonlyNonEmptyArray",
          to: "Immutable",
        },
        {
          // Sigh
          name: "Promise",
          to: "Immutable",
          from: "ReadonlyDeep",
        },
      ],
    },
  },
};

export = config;
