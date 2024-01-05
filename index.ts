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
    // In all contexts, Use a structured logger such as Pino instead.
    // In an fp context, use an appropriate IO type.
    "no-console": ["error"],
    // Encourage use of https://github.com/agiledigital-labs/pino-redact-pii
    "no-restricted-properties": [
      "error",
      {
        object: "JSON",
        property: "stringify",
        message: "Use a safe stringify alterative",
      },
      {
        object: "util",
        property: "inspect",
        message: "Use a safe stringify alterative",
      },
    ],
    "functional/no-expression-statements": [
      "error",
      {
        // Permit the following types of expressions to be used as statements (i.e. to have their results discarded)
        // * console.log() and friends
        // * React hooks (functions that start with `use`)
        ignoreCodePattern:
          "(console.)(?=log|info|warn|debug|error|trace)|^use[a-zA-Z]+",
        ignoreVoid: false,
      },
    ],
    curly: ["error"],
  },
  overrides: [
    {
      files: ["*.test.ts"],
      rules: {
        // We allow tests to interpret/execute effects
        "total-functions/no-premature-fp-ts-effects": "off",
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
    {
      files: ["*.tsx"],
      rules: {
        "functional/functional-parameters": [
          "error",
          {
            enforceParameterCount: false,
          },
        ],
        // This is a common pattern in React for hooks and callbacks.
        "functional/no-return-void": "off",
        "functional/prefer-immutable-types": [
          "error",
          {
            ignoreTypePattern: ["JSX"],
          },
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
        {
          type: { from: "lib", name: "Map" },
          to: "Mutable",
        },
        {
          type: { from: "lib", name: "Set" },
          to: "Mutable",
        },
        {
          type: { from: "lib", name: "Date" },
          to: "Mutable",
        },
        {
          type: { from: "lib", name: "URL" },
          to: "Mutable",
        },
        {
          type: { from: "lib", name: "URLSearchParams" },
          to: "Mutable",
        },
        {
          type: "ReadonlyArray",
          to: "Immutable",
          from: "ReadonlyDeep",
        },
        {
          type: "ReadonlyArray",
          to: "Immutable",
          from: "ReadonlyDeep",
        },
        {
          // From fp-ts
          // export interface JsonArray extends ReadonlyArray<Json> {}
          type: "JsonArray",
          to: "Immutable",
        },
        {
          // From fp-ts
          // export declare type Json = boolean | number | string | null | JsonArray | JsonRecord
          type: "Json",
          to: "Immutable",
        },
        {
          // From io-ts
          // export interface Errors extends Array<ValidationError> {}
          type: "Errors",
          to: "Immutable",
          from: "Mutable",
        },
        {
          // From io-ts
          // A readonly codec. Not the type of the value represented by the codec. The type of the codec itself.
          // I.e., the result of calling `T.readonly(...)`.
          type: "ReadonlyC",
          to: "Immutable",
          from: "Mutable",
        },
        {
          // From https://github.com/agiledigital/readonly-types
          // TODO work out why this is being detected wrong
          type: "ReadonlyDate",
          to: "Immutable",
        },
        {
          // From fp-ts
          type: "ReadonlyNonEmptyArray",
          to: "Immutable",
        },
        {
          // Sigh
          type: "Promise",
          to: "Immutable",
          from: "ReadonlyDeep",
        },
      ],
    },
  },
};

export = config;
