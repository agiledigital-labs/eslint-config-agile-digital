// FIXME why is this rule triggered here?
// eslint-disable-next-line import-x/no-unresolved
import tseslint from "typescript-eslint";
import base from "./index.mjs";
import react from "./react.mjs";
// This lint config is used for test the combination of base and react config.
// It only extends settings from base and react eslint config.
// eslint-disable-next-line functional/prefer-immutable-types
const config = tseslint.config({
    extends: [...base, ...react],
});
export default config;
