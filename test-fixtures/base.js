"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whoops = void 0;
// Note: no functional/no-expression-statements error here
console.info("hello");
// Note: no-template-curly-in-string is on
// eslint-disable-next-line no-template-curly-in-string
exports.whoops = "${whoops}";
