"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFunction = exports.myFunctionWithParam = exports.myFunction = exports.whoops = void 0;
// Console is forbidden
// eslint-disable-next-line no-console
console.info("");
// eslint-disable-next-line no-console
console.log("");
// eslint-disable-next-line no-console
console.error("");
// eslint-disable-next-line no-console
console.warn("");
// Note: no-template-curly-in-string is on
// eslint-disable-next-line no-template-curly-in-string
exports.whoops = "${whoops}";
// Note: report parameter requirements.
// eslint-disable-next-line functional/functional-parameters
const myFunction = () => "";
exports.myFunction = myFunction;
// Note: report the expected functional parameters errors.
// eslint-disable-next-line functional/functional-parameters, functional/prefer-immutable-types, @typescript-eslint/no-unused-vars
const myFunctionWithParam = (..._args) => {
    return "";
};
exports.myFunctionWithParam = myFunctionWithParam;
// Note: report functional parameter and return type errors.
// eslint-disable-next-line functional/functional-parameters, functional/no-return-void
const useFunction = () => { };
exports.useFunction = useFunction;
