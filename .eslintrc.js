module.exports = {
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
  env: {
    "jest/globals": true,
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
    "react",
    "react-hooks",
    "jsx-a11y",
  ],
  rules: {
    "spellcheck/spell-checker": [
      1,
      {
        skipWords: [
          "globals",
          "commonjs",
          "sonarjs",
          "tsconfig",
          "ecma",
          "fp",
          "a11y",
          "jsx",
        ],
      },
    ],
  },
  ignorePatterns: ["dist/*"],
  settings: {
  },
};
