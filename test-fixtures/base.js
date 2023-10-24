"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFunction = exports.myFunctionWithParam = exports.myFunction = exports.whoops = void 0;
// Note: no functional/no-expression-statements error here
console.info("hello");
// Note: error on no console log.
// eslint-disable-next-line no-console
console.log("not good");
// Note: no-template-curly-in-string is on
// eslint-disable-next-line no-template-curly-in-string, jsdoc/require-jsdoc
exports.whoops = "${whoops}";
// Note: report parameter requirements.
// eslint-disable-next-line functional/functional-parameters, jsdoc/require-jsdoc
const myFunction = () => "";
exports.myFunction = myFunction;
// Note: report the expected functional parameters errors.
// eslint-disable-next-line functional/functional-parameters, functional/prefer-immutable-types, jsdoc/require-jsdoc
const myFunctionWithParam = (...args) => {
    console.info(args);
    return "";
};
exports.myFunctionWithParam = myFunctionWithParam;
// Note: report functional parameter and return type errors.
// eslint-disable-next-line functional/functional-parameters, functional/no-return-void, jsdoc/require-jsdoc
const useFunction = () => { };
exports.useFunction = useFunction;
