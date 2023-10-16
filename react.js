"use strict";
// eslint-disable-next-line functional/prefer-immutable-types
const config = {
    globals: {},
    env: {
        es6: true,
        browser: true,
    },
    plugins: ["react", "react-hooks", "react-refresh", "jsx-a11y"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    rules: {
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "default",
                format: ["camelCase"],
                leadingUnderscore: "allow",
            },
            {
                selector: "variable",
                // Need to allow PascalCase for React components
                format: ["PascalCase", "camelCase", "UPPER_CASE"],
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
        "react/prefer-stateless-function": "error",
        "react/button-has-type": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-no-script-url": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-danger-with-children": "error",
        "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
        "react/jsx-fragments": "error",
        "react/destructuring-assignment": [
            "error",
            "always",
            { destructureInSignature: "always" },
        ],
        "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
        "react/jsx-max-depth": ["error", { max: 5 }],
        "react/function-component-definition": [
            "warn",
            { namedComponents: "arrow-function" },
        ],
        "react/jsx-key": [
            "error",
            {
                checkFragmentShorthand: true,
                checkKeyMustBeforeSpread: true,
                warnOnDuplicates: true,
            },
        ],
        "react/jsx-no-useless-fragment": "warn",
        "react/jsx-curly-brace-presence": "warn",
        "react/no-typos": "warn",
        "react/display-name": "warn",
        "react/self-closing-comp": "warn",
        "react/jsx-sort-props": "warn",
        "react/react-in-jsx-scope": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/prop-types": "off",
        "react-refresh/only-export-components": "warn",
    },
    overrides: [
        {
            // override for storybook
            files: ["*.{stories,story}.{ts,tsx}"],
            rules: {
                "@typescript-eslint/naming-convention": "off",
                "@typescript-eslint/no-floating-promises": "off",
                "import/no-default-export": "off",
                "jsdoc/require-jsdoc": "off",
            },
        },
    ],
    settings: {
        react: {
            version: "detect",
        },
        componentWrapperFunctions: [
            "observer",
            {
                property: "styled",
            },
            {
                property: "observer",
                object: "Mobx",
            },
            {
                property: "observer",
                object: "<pragma>",
            },
        ],
        formComponents: [
            // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
            "CustomForm",
            {
                name: "Form",
                formAttribute: "endpoint",
            },
        ],
        linkComponents: [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            {
                name: "Link",
                linkAttribute: "to",
            },
        ],
    },
};
module.exports = config;
