# eslint-config-agile-digital

Agile Digital's standard ESLint config

[![Build Status](https://github.com/agiledigital-labs/eslint-config-agile-digital/actions/workflows/node.js.yml/badge.svg)](https://github.com/agiledigital-labs/eslint-config-agile-digital/actions/workflows/node.js.yml)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fagiledigital-labs%2Feslint-config-agile-digital%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
![npm](https://img.shields.io/npm/v/eslint-config-agile-digital)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/agiledigital-labs/eslint-config-agile-digital)

## Installation

```sh
yarn add --dev eslint-config-agile-digital \
  eslint-config-typed-fp \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-plugin-functional \
  eslint-plugin-total-functions \
  eslint-plugin-jest \
  eslint-plugin-prettier \
  eslint-plugin-sonarjs \
  eslint-plugin-spellcheck \
  eslint-plugin-import \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y \
  eslint-plugin-rxjs \
  eslint-plugin-jasmine
  typescript
```

## Usage

1. Turn on TypeScript's [strict mode](https://www.typescriptlang.org/tsconfig#strict) and [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) option.
2. Set up [ESLint + TypeScript](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md).
3. Update your `.eslintrc.js`:

```diff
module.exports = {
+  parser: "@typescript-eslint/parser",
  parserOptions: {
+    project: "./tsconfig.json",
+    ecmaVersion: 2018,
+    sourceType: "module"
  },
  extends: [
+  "agile-digital",
+  "agile-digital/react", // In addition to the above if this is a React project
  ...
  ],
  plugins: [
+  "jest",
+  "sonarjs",
+  "functional",
+  "@typescript-eslint",
+  "prettier",
+  "total-functions",
+  "import",
+  "spellcheck",
+  "react",
+  "react-hooks",
+  "jsx-a11y",
  ...
],
  rules: {
    ...
  }
};

```

## Usage in Angular

Angular customised plugin. It is not compatible with `agile-digital` because `agile-digital` has functional plugins which do not fit Angular.

1. Run `ng add @angular-eslint/schematics`
2. Update `.eslintrc.json`

```diff
  "overrides": [
    {
      "files": ["*.ts"],
+     parser: "@typescript-eslint/parser",
+     parserOptions: {
+       project: "./tsconfig.json",
+       ecmaVersion: 2018,
+       sourceType: "module",
+     },
      "extends": [
+       "agile-digital/angular"
      ],
     "plugins": [
+      "prettier", "rxjs", "sonarjs", "jasmine", "import"
      ]
    },
    ...
    {
      "files": ["*.html"],
      "extends": [
+       "agile-digital/angular-template"
      ]
    }
  ]
```
