# eslint-config-agile-digital

Agile Digital's standard ESLint config

[![Build Status](https://github.com/agiledigital-labs/eslint-config-agile-digital/actions/workflows/node.js.yml/badge.svg)](https://github.com/agiledigital-labs/eslint-config-agile-digital/actions/workflows/node.js.yml)
[![Type Coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fagiledigital-labs%2Feslint-config-agile-digital%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![npm](https://img.shields.io/npm/v/@agiledigital/eslint-config)](https://www.npmjs.com/package/@agiledigital/eslint-config)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/agiledigital-labs/eslint-config-agile-digital)

## Installation

```sh
yarn add --dev @agiledigital/eslint-config \
  eslint-config-typed-fp \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-plugin-functional \
  eslint-plugin-total-functions \
  eslint-plugin-jest \
  eslint-plugin-prettier \
  eslint-plugin-sonarjs \
  eslint-plugin-import \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y \
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
+    tsconfigRootDir: __dirname,
  },
  extends: [
+  "@agiledigital",
+  "@agiledigital/eslint-config/react", // In addition to the above if this is a React project 
  ...
  ],
  rules: {
    ...
  }
};

```
