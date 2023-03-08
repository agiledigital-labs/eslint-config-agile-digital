module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["agile-digital", "agile-digital/react"],
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
          "Readonly",
          "io",
          "codec",
        ],
      },
    ],
  },
  ignorePatterns: ["dist/*"],
  settings: {
  },
};
