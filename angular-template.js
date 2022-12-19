"use strict";
const config = {
    globals: {},
    env: {
        es6: true,
        browser: true,
    },
    overrides: [],
    extends: ["plugin:@angular-eslint/template/recommended"],
    rules: {
        "@angular-eslint/template/eqeqeq": "error",
        "@angular-eslint/template/conditional-complexity": [
            "error",
            { maxComplexity: 2 },
        ],
        "@angular-eslint/template/no-any": "error",
        "@angular-eslint/template/use-track-by-function": "error",
    },
};
module.exports = config;
