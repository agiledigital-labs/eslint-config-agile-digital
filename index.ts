import type { TSESLint } from "@typescript-eslint/utils";

// eslint-disable-next-line functional/prefer-immutable-types
const config: TSESLint.Linter.Config = {
  root: true,
  globals: {},
  env: {
    commonjs: true,
    es6: true,
    "jest/globals": true,
  },
  plugins: [
    "jest",
    "sonarjs",
    "functional",
    "@typescript-eslint",
    "prettier",
    "total-functions",
    "import",
    "prefer-arrow-functions",
    "simple-import-sort",
    "filename-rules",
    "jsdoc",
    "eslint-plugin-tsdoc",
    "no-secrets",
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
    "plugin:jsdoc/recommended-typescript",
  ],
  rules: {
    "no-template-curly-in-string": ["error"],
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
        ignoreCodePattern:
          "(console.)(?=log|info|warn|debug|error|trace)|^use[a-zA-Z]+",
        ignoreVoid: false,
      },
    ],
    curly: ["error"],
    eqeqeq: ["error", "smart"],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-alert": "error",
    "object-shorthand": "warn",
    "no-implicit-coercion": "warn",
    "prefer-template": "warn",

    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": true,
        "ts-nocheck": true,
        "ts-check": false,
        minimumDescriptionLength: 3,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "@typescript-eslint/no-floating-promises": [
      "error",
      { ignoreVoid: true, ignoreIIFE: true },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: null,
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: [
          "function",
          "interface",
          "type",
          "try",
          "throw",
          "case",
          "default",
        ],
      },
    ],

    "import/no-extraneous-dependencies": [
      "error",
      // allow devDependencies to be imported into testing files, etc.
      { devDependencies: ["**/*.{test,spec,story,stories}.{ts,tsx}"] },
    ],
    "import/no-default-export": "error",

    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",

    "jsdoc/require-throws": "error",
    "jsdoc/check-indentation": "warn",
    "jsdoc/no-blank-blocks": "warn",
    "jsdoc/require-asterisk-prefix": "warn",
    "jsdoc/require-description": "warn",
    "jsdoc/sort-tags": "warn",
    "jsdoc/check-syntax": "warn",
    "jsdoc/tag-lines": ["warn", "never", { startLines: 1 }],
    "jsdoc/require-param": ["warn", { checkDestructuredRoots: false }],
    "jsdoc/require-jsdoc": [
      "warn",
      {
        publicOnly: true,
        require: {
          FunctionDeclaration: true,
          FunctionExpression: true,
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          MethodDefinition: true,
        },
        contexts: [
          "VariableDeclaration",
          "TSTypeAliasDeclaration",
          // Encourage documenting React prop types
          "TSPropertySignature",
        ],
        enableFixer: true,
      },
    ],
    // tsdoc checks this syntax instead
    "jsdoc/require-hyphen-before-param-description": "off",
    "jsdoc/require-returns": "off",

    "tsdoc/syntax": "warn",

    "prefer-arrow-functions/prefer-arrow-functions": [
      "warn",
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        returnStyle: "unchanged",
      },
    ],
    "arrow-body-style": "warn",
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: true,
      },
    ],

    "filename-rules/match": [2, { ".ts": "camelcase", ".tsx": "pascalcase" }],

    "no-secrets/no-secrets": [
      "error",
      { ignoreContent: "https", tolerance: 4.2 },
    ],
  },
  overrides: [
    {
      files: ["*.test.{ts,tsx}"],
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
        "@typescript-eslint/no-floating-promises": "off",
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
