// FIXME: disable this rule for all js and mjs files - we still need type annotations there (because not TypeScript)
/* eslint-disable jsdoc/no-types */
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
// @ts-expect-error FIXME eslint-plugin-jest needs type definitions
import noSecrets from "eslint-plugin-no-secrets";
import importX from "eslint-plugin-import-x";

// FIXME why is this rule triggered here?
// eslint-disable-next-line no-undef
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
// eslint-disable-next-line functional/prefer-immutable-types
const compat = new FlatCompat({ baseDirectory: __dirname });

/**
 * @param {string} name the plugin name
 * @param {string} alias the plugin alias
 * @returns {import("eslint").ESLint.Plugin} the plugin
 * @see https://github.com/import-js/eslint-plugin-import/issues/2948#issuecomment-2148832701
 */
// eslint-disable-next-line functional/prefer-immutable-types
const legacyPlugin = (name, alias = name) => {
  // eslint-disable-next-line functional/prefer-immutable-types
  const plugin = compat.plugins(name)[0]?.plugins?.[alias];

  // eslint-disable-next-line functional/no-conditional-statements
  if (plugin === undefined) {
    // eslint-disable-next-line functional/no-throw-statements
    throw new Error(
      `Unable to resolve plugin [${name}] and/or alias [${alias}].`,
    );
  }

  return fixupPluginRules(plugin);
};

// See https://typescript-eslint.io/getting-started
// See https://typescript-eslint.io/packages/typescript-eslint/#config
export default tseslint.config(
  eslintJs.configs.recommended,
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.strictTypeChecked,
  functionalPlugin.configs.strict,
  jsdoc.configs["flat/recommended-typescript"],
  // FIXME eslint-plugin-jest needs type definitions
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  jest.configs["flat/recommended"],
  sonarjs.configs.recommended,
  ...compat.extends(
    "plugin:import-x/recommended",
    "plugin:import-x/typescript",
  ),
  // This must come last. See https://github.com/prettier/eslint-plugin-prettier
  eslintPluginPrettierRecommended,
  {
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
      "prefer-arrow-functions": legacyPlugin(
        "eslint-plugin-prefer-arrow-functions",
        "prefer-arrow-functions",
      ),
      "filename-rules": legacyPlugin(
        "eslint-plugin-filename-rules",
        "filename-rules",
      ),
      // FIXME eslint-plugin-jest needs type definitions
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      jest,
      // FIXME eslint-plugin-no-secrets needs type definitions
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      "no-secrets": noSecrets,
      "import-x": importX,
    },
  },
);
