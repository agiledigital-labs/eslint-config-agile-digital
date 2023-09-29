module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  extends: ["@agiledigital", "@agiledigital/eslint-config/react"],
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
    "react",
    "react-hooks",
    "jsx-a11y",
  ],
  ignorePatterns: ["dist/*", "test-fixtures/*"],
  settings: {
  },
};
