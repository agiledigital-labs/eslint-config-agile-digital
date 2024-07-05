// Console is forbidden
// eslint-disable-next-line no-console
console.info("");
// eslint-disable-next-line no-console
console.log("");
// eslint-disable-next-line no-console
console.error("");
// eslint-disable-next-line no-console
console.warn("");
// error  'JSON.stringify' is restricted from being used. Use a safe stringify alterative
// eslint-disable-next-line no-restricted-properties, jsdoc/require-jsdoc
export const a = JSON.stringify("");
// NB JSON.stringify is not detected when accessed via an alias.
// eslint-disable-next-line functional/prefer-immutable-types, @typescript-eslint/naming-convention
const JSONAlias = JSON;
// eslint-disable-next-line jsdoc/require-jsdoc
export const b = JSONAlias.stringify("");
// Note: no-template-curly-in-string is on
// eslint-disable-next-line no-template-curly-in-string, jsdoc/require-jsdoc
export const whoops = "${whoops}";
// Note: report parameter requirements.
// eslint-disable-next-line functional/functional-parameters, jsdoc/require-jsdoc
export const myFunction = () => "";
// Note: report the expected functional parameters errors.
// eslint-disable-next-line functional/functional-parameters, functional/prefer-immutable-types, jsdoc/require-jsdoc
export const myFunctionWithParam = (..._args) => "";
// Note: report functional parameter and return type errors.
// eslint-disable-next-line functional/functional-parameters, functional/no-return-void, jsdoc/require-jsdoc
export const useFunction = () => { };
