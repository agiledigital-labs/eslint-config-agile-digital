"use strict";
const config = {
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
    extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    rules: {},
    settings: {
        react: {
            version: "detect",
        },
    },
};
module.exports = config;
