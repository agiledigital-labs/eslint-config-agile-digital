import url from "node:url";
import { fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import eslintJs from "@eslint/js";
// FIXME why is this rule triggered here?
// eslint-disable-next-line import-x/no-unresolved
import tseslint from "typescript-eslint";
// FIXME why is this rule triggered here?
// eslint-disable-next-line import-x/no-unresolved
import functionalPlugin from "eslint-plugin-functional/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import jsdoc from "eslint-plugin-jsdoc";
// @ts-expect-error FIXME eslint-plugin-jest needs type definitions
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import sonarjs from "eslint-plugin-sonarjs";
// @ts-expect-error FIXME eslint-plugin-no-secrets needs type definitions
import noSecrets from "eslint-plugin-no-secrets";
import importX from "eslint-plugin-import-x";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
// eslint-disable-next-line functional/prefer-immutable-types
const compat = new FlatCompat({ baseDirectory: __dirname });
/**
 * @param name the plugin name
 * @param alias the plugin alias
 * @returns the plugin
 * @see https://github.com/import-js/eslint-plugin-import/issues/2948#issuecomment-2148832701
 */
// eslint-disable-next-line functional/prefer-immutable-types
const legacyPlugin = (name, alias = name) => {
    // eslint-disable-next-line functional/prefer-immutable-types
    const plugin = compat.plugins(name)[0]?.plugins?.[alias];
    // eslint-disable-next-line functional/no-conditional-statements
    if (plugin === undefined) {
        // eslint-disable-next-line functional/no-throw-statements
        throw new Error(`Unable to resolve plugin [${name}] and/or alias [${alias}].`);
    }
    return fixupPluginRules(plugin);
};
// eslint-disable-next-line functional/prefer-immutable-types
const config = tseslint.config(eslintJs.configs.recommended, tseslint.configs.eslintRecommended, ...tseslint.configs.strictTypeChecked, functionalPlugin.configs.strict, jsdoc.configs["flat/recommended"], 
// FIXME eslint-plugin-jest needs type definitions
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
jest.configs["flat/recommended"], sonarjs.configs.recommended, ...compat.extends("plugin:import-x/recommended", "plugin:import-x/typescript"), 
// This must come last. See https://github.com/prettier/eslint-plugin-prettier
eslintPluginPrettierRecommended, {
    linterOptions: {
        reportUnusedDisableDirectives: true,
    },
    languageOptions: {
        globals: {
            "jest/globals": true,
            es6: true,
        },
        // See https://typescript-eslint.io/getting-started/typed-linting
        parserOptions: {
            project: "tsconfig.json",
            tsconfigRootDir: __dirname,
        },
    },
    plugins: {
        "@functional": functionalPlugin,
        "@typescript-eslint": tseslint.plugin,
        "simple-import-sort": simpleImportSort,
        jsdoc,
        tsdoc: legacyPlugin("eslint-plugin-tsdoc", "tsdoc"),
        // FIXME: make sure we've included the recommended config
        "prefer-arrow-functions": legacyPlugin("eslint-plugin-prefer-arrow-functions", "prefer-arrow-functions"),
        // FIXME: make sure we've included the recommended config
        "filename-rules": legacyPlugin("eslint-plugin-filename-rules", "filename-rules"),
        // FIXME eslint-plugin-jest needs type definitions
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        jest,
        // FIXME eslint-plugin-no-secrets needs type definitions
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        "no-secrets": noSecrets,
        "import-x": importX,
    },
    rules: {
        "no-template-curly-in-string": ["error"],
        // In all contexts, use a structured logger such as Pino instead.
        // In an fp context, use an appropriate IO type.
        "no-console": ["error"],
        // Encourage use of https://github.com/agiledigital-labs/pino-redact-pii
        "no-restricted-properties": [
            "error",
            {
                object: "JSON",
                property: "stringify",
                message: "Use a safe stringify alterative",
            },
            {
                object: "util",
                property: "inspect",
                message: "Use a safe stringify alterative",
            },
        ],
        "functional/no-expression-statements": [
            "error",
            {
                // Permit the following types of expressions to be used as statements (i.e. to have their results discarded)
                // * console.log() and friends
                // * React hooks (functions that start with `use`)
                ignoreCodePattern: "(console.)(?=log|info|warn|debug|error|trace)|^use[a-zA-Z]+",
                ignoreVoid: false,
            },
        ],
        curly: ["error"],
        eqeqeq: ["error", "always"],
        "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
        "no-alert": "error",
        "no-implicit-coercion": "error",
        "object-shorthand": "warn",
        "prefer-template": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": true,
                "ts-nocheck": true,
                "ts-check": false,
                minimumDescriptionLength: 3,
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true,
                enforceForJSX: true,
            },
        ],
        "@typescript-eslint/no-floating-promises": [
            "error",
            { ignoreVoid: true, ignoreIIFE: true },
        ],
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksVoidReturn: {
                    arguments: false,
                    attributes: false,
                },
            },
        ],
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "default",
                format: ["camelCase"],
                leadingUnderscore: "allow",
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE"],
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
        "@typescript-eslint/padding-line-between-statements": [
            "warn",
            {
                blankLine: "always",
                prev: "*",
                next: [
                    "function",
                    "interface",
                    "type",
                    "try",
                    "throw",
                    "case",
                    "default",
                ],
            },
        ],
        "import-x/no-extraneous-dependencies": [
            "error",
            // allow devDependencies to be imported into testing files, etc.
            { devDependencies: ["**/*.{test,spec,story,stories}.{ts,tsx}"] },
        ],
        "import-x/no-default-export": "error",
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        "jsdoc/require-throws": "error",
        "jsdoc/check-indentation": "warn",
        "jsdoc/no-blank-blocks": "warn",
        "jsdoc/require-asterisk-prefix": "warn",
        "jsdoc/require-description": "warn",
        "jsdoc/sort-tags": "warn",
        "jsdoc/check-syntax": "warn",
        "jsdoc/tag-lines": ["warn", "never", { startLines: 1 }],
        "jsdoc/require-param": ["warn", { checkDestructuredRoots: false }],
        "jsdoc/require-jsdoc": [
            "warn",
            {
                publicOnly: true,
                require: {
                    FunctionDeclaration: true,
                    FunctionExpression: true,
                    ArrowFunctionExpression: true,
                    ClassDeclaration: true,
                    ClassExpression: true,
                    MethodDefinition: true,
                },
                contexts: [
                    "VariableDeclaration",
                    "TSTypeAliasDeclaration",
                    "TSMethodSignature",
                    "TSInterfaceDeclaration",
                    // Encourage documenting React prop types
                    "TSPropertySignature",
                ],
                enableFixer: true,
            },
        ],
        "jsdoc/check-tag-names": [
            "warn",
            { definedTags: ["remarks", "privateRemarks"] },
        ],
        // tsdoc checks this syntax instead
        "jsdoc/require-hyphen-before-param-description": "off",
        "jsdoc/require-returns": "off",
        "tsdoc/syntax": "warn",
        "prefer-arrow-functions/prefer-arrow-functions": [
            "warn",
            {
                classPropertiesAllowed: true,
                disallowPrototype: true,
                returnStyle: "unchanged",
            },
        ],
        "arrow-body-style": "warn",
        "prefer-arrow-callback": [
            "warn",
            {
                allowNamedFunctions: true,
            },
        ],
        // FIXME: unmaintained package. remove? This rule fails with the following error:
        // > Error: Key "rules": Key "filename-rules/match":
        // >   Value [{".ts":"camelcase",".tsx":"pascalcase"}] should NOT have more than 0 items.
        // "filename-rules/match": [2, { ".ts": "camelcase", ".tsx": "pascalcase" }],
        "no-secrets/no-secrets": [
            "error",
            { ignoreContent: "https", tolerance: 4.2 },
        ],
    },
    settings: {
        immutability: {
            overrides: [
                // https://github.com/RebeccaStevens/is-immutable-type#default-overrides
                // Note: When providing custom overrides, the default ones will not be used.
                // Be sure to include the default overrides in your custom overrides if you
                // don't want to lose them. You can obtain them with getDefaultOverrides().
                {
                    type: { from: "lib", name: "Map" },
                    to: "Mutable",
                },
                {
                    type: { from: "lib", name: "Set" },
                    to: "Mutable",
                },
                {
                    type: { from: "lib", name: "Date" },
                    to: "Mutable",
                },
                {
                    type: { from: "lib", name: "URL" },
                    to: "Mutable",
                },
                {
                    type: { from: "lib", name: "URLSearchParams" },
                    to: "Mutable",
                },
                {
                    type: "ReadonlyArray",
                    to: "Immutable",
                    from: "ReadonlyDeep",
                },
                {
                    type: "ReadonlyArray",
                    to: "Immutable",
                    from: "ReadonlyDeep",
                },
                {
                    // From fp-ts
                    // export interface JsonArray extends ReadonlyArray<Json> {}
                    type: "JsonArray",
                    to: "Immutable",
                },
                {
                    // From fp-ts
                    // export declare type Json = boolean | number | string | null | JsonArray | JsonRecord
                    type: "Json",
                    to: "Immutable",
                },
                {
                    // From io-ts
                    // export interface Errors extends Array<ValidationError> {}
                    type: "Errors",
                    to: "Immutable",
                    from: "Mutable",
                },
                {
                    // From io-ts
                    // A readonly codec. Not the type of the value represented by the codec. The type of the codec itself.
                    // I.e., the result of calling `T.readonly(...)`.
                    type: "ReadonlyC",
                    to: "Immutable",
                    from: "Mutable",
                },
                {
                    // From https://github.com/agiledigital/readonly-types
                    // TODO work out why this is being detected wrong
                    type: "ReadonlyDate",
                    to: "Immutable",
                },
                {
                    // From fp-ts
                    type: "ReadonlyNonEmptyArray",
                    to: "Immutable",
                },
                {
                    // Sigh
                    type: "Promise",
                    to: "Immutable",
                    from: "ReadonlyDeep",
                },
            ],
        },
    },
}, 
// Formerly overrides
// see https://eslint.org/docs/latest/use/configure/migration-guide#glob-based-configs (maybe)
{
    files: ["*.test.{ts,tsx}"],
    rules: {
        // We allow tests to interpret/execute effects
        "total-functions/no-premature-fp-ts-effects": "off",
        "functional/no-return-void": "off",
        "functional/functional-parameters": "off",
        "functional/no-expression-statements": "off",
        "functional/no-throw-statements": "off",
        "functional/no-conditional-statements": "off",
        "functional/prefer-immutable-types": [
            "error",
            { enforcement: "ReadonlyDeep" },
        ],
        "@typescript-eslint/no-floating-promises": "off",
    },
}, {
    files: ["*.tsx"],
    rules: {
        "functional/functional-parameters": [
            "error",
            {
                enforceParameterCount: false,
            },
        ],
        // This is a common pattern in React for hooks and callbacks.
        "functional/no-return-void": "off",
        "functional/prefer-immutable-types": [
            "error",
            {
                ignoreTypePattern: ["JSX"],
            },
        ],
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
    },
});
export default config;
