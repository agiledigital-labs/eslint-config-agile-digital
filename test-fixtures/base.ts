// Note: no functional/no-expression-statements error here
console.info("hello");

// Note: error on no console log.
// eslint-disable-next-line no-console
console.log("not good");

// Note: no-template-curly-in-string is on
// eslint-disable-next-line no-template-curly-in-string
export const whoops = "${whoops}";

// Note: report parameter requirements.
// eslint-disable-next-line functional/functional-parameters
export const myFunction = (): string => "";

// Note: report the expected functional parameters errors.
// eslint-disable-next-line functional/functional-parameters, functional/prefer-immutable-types
export const myFunctionWithParam = (...args: string[]): string => {
  console.info(args);
  return "";
};

// Note: report functional parameter and return type errors.
// eslint-disable-next-line functional/functional-parameters, functional/no-return-void
export const useFunction = (): void => {};
