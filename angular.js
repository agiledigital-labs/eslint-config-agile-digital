"use strict";
const config = {
    globals: {},
    env: {
        es6: true,
        browser: true,
    },
    overrides: [],
    plugins: ["prettier", "rxjs", "sonarjs", "jasmine", "import"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2018,
        sourceType: "module",
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/strict",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/recommended--extra",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended",
        "plugin:rxjs/recommended",
        "plugin:sonarjs/recommended",
        "plugin:jasmine/recommended",
        "plugin:import/recommended",
    ],
    rules: {
        eqeqeq: "error",
        "@typescript-eslint/no-explicit-any": "error",
        // rules from angular-eslint plugin
        "@angular-eslint/directive-selector": [
            "error",
            {
                type: "attribute",
                prefix: "app",
                style: "camelCase",
            },
        ],
        "@angular-eslint/component-selector": [
            "error",
            {
                type: "element",
                prefix: "app",
                style: "kebab-case",
            },
        ],
        // Style 02-03
        "@angular-eslint/component-class-suffix": "error",
        "@angular-eslint/contextual-decorator": "error",
        "@angular-eslint/contextual-lifecycle": "error",
        "@angular-eslint/directive-class-suffix": "error",
        "@angular-eslint/no-empty-lifecycle-method": "error",
        "@angular-eslint/no-input-rename": "error",
        // Style 05-12
        "@angular-eslint/no-inputs-metadata-property": "error",
        // TODO: allow for tests
        "@angular-eslint/no-lifecycle-call": "error",
        "@angular-eslint/no-output-native": "error",
        // Style 05-16
        "@angular-eslint/no-output-on-prefix": "error",
        "@angular-eslint/no-output-rename": "error",
        // Style 05-12
        "@angular-eslint/no-outputs-metadata-property": "error",
        "@angular-eslint/sort-ngmodule-metadata-arrays": "error",
        "@angular-eslint/use-component-selector": "error",
        "@angular-eslint/use-lifecycle-interface": "error",
        "@angular-eslint/use-pipe-transform-interface": "error",
        "rxjs/finnish": "error",
        "rxjs/no-exposed-subjects": "error",
        "import/no-cycle": "error",
        "import/no-useless-path-segments": "warn",
        "import/order": "error",
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: ["./tsconfig.app.json", "./tsconfig.spec.json"],
            },
        },
    },
};
module.exports = config;
