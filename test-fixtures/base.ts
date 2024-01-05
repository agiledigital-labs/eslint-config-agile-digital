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
// eslint-disable-next-line no-restricted-properties
export const a = JSON.stringify("");

// NB JSON.stringify is not detected when accessed via an alias.
// eslint-disable-next-line functional/prefer-immutable-types
const JSONAlias = JSON;
export const b = JSONAlias.stringify("");

// Note: no-template-curly-in-string is on
// eslint-disable-next-line no-template-curly-in-string
export const whoops = "${whoops}";

// Note: report parameter requirements.
// eslint-disable-next-line functional/functional-parameters
export const myFunction = (): string => "";

// Note: report the expected functional parameters errors.
// eslint-disable-next-line functional/functional-parameters, functional/prefer-immutable-types, @typescript-eslint/no-unused-vars
export const myFunctionWithParam = (..._args: string[]): string => {
  return "";
};

// Note: report functional parameter and return type errors.
// eslint-disable-next-line functional/functional-parameters, functional/no-return-void
export const useFunction = (): void => {};
