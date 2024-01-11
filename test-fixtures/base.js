"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFunction = exports.myFunctionWithParam = exports.myFunction = exports.whoops = exports.b = exports.a = void 0;
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
exports.a = JSON.stringify("");
// NB JSON.stringify is not detected when accessed via an alias.
// Note: functional/prefer-immutable-types should not be triggered (it is disabled until library issue is resolved)
const JSONAlias = JSON;
exports.b = JSONAlias.stringify("");
// Note: no-template-curly-in-string is on
// eslint-disable-next-line no-template-curly-in-string
exports.whoops = "${whoops}";
// Note: report parameter requirements.
// eslint-disable-next-line functional/functional-parameters
const myFunction = () => "";
exports.myFunction = myFunction;
// Note: report the expected functional parameters errors.
// eslint-disable-next-line functional/functional-parameters, @typescript-eslint/no-unused-vars
const myFunctionWithParam = (..._args) => {
    return "";
};
exports.myFunctionWithParam = myFunctionWithParam;
// Note: report functional parameter and return type errors.
// eslint-disable-next-line functional/functional-parameters, functional/no-return-void
const useFunction = () => { };
exports.useFunction = useFunction;
