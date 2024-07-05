import url from "node:url";
// FIXME why is this rule triggered here?
// eslint-disable-next-line import-x/no-unresolved
import tseslint from "typescript-eslint";
// @ts-expect-error FIXME eslint-plugin-react needs type definitions
import react from "eslint-plugin-react";
import globals from "globals";
// @ts-expect-error FIXME eslint-plugin-react-refresh needs type definitions
import reactRefresh from "eslint-plugin-react-refresh";
// @ts-expect-error FIXME eslint-plugin-react-hooks needs type definitions
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";
// @ts-expect-error FIXME eslint-plugin-jsx-a11y needs type definitions
import jsxAlly from "eslint-plugin-jsx-a11y";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
// eslint-disable-next-line functional/prefer-immutable-types
const config = tseslint.config(...tseslint.configs.strictTypeChecked, {
    linterOptions: {
        reportUnusedDisableDirectives: true,
    },
    languageOptions: {
        globals: {
            ...globals.browser,
        },
        // See https://typescript-eslint.io/getting-started/typed-linting
        parserOptions: {
            project: "tsconfig.json",
            tsconfigRootDir: __dirname,
        },
    },
    plugins: {
        // FIXME eslint-plugin-react needs type definitions
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        react: fixupPluginRules(react),
        // FIXME flat config support https://github.com/facebook/react/issues/28313
        // FIXME eslint-plugin-react-hooks needs type definitions
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        "react-hooks": fixupPluginRules(eslintPluginReactHooks),
        // FIXME eslint-plugin-react-refresh needs type definitions
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        "react-refresh": fixupPluginRules(reactRefresh),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        "jsx-a11y": fixupPluginRules(jsxAlly),
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    rules: {
        // FIXME: react config (recommended + jsx-runtime)...
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ...react.configs.recommended.rules,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ...eslintPluginReactHooks.configs.recommended.rules,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ...jsxAlly.configs.recommended.rules,
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
}, {
    // override for storybook
    files: ["*.{stories,story}.{ts,tsx}"],
    rules: {
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "import/no-default-export": "off",
        "jsdoc/require-jsdoc": "off",
    },
});
export default config;
