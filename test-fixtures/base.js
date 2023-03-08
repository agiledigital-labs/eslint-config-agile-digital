"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = exports.useSomeSideEffect = exports.useTitle = exports.whoops = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// Note: no functional/no-expression-statements error here
console.info("hello");
// Note: no-template-curly-in-string is on
// eslint-disable-next-line no-template-curly-in-string
exports.whoops = "${whoops}";
// TODO: Allow this when it is assigned to a value whose name implies it is a hook?
// eslint-disable-next-line functional/functional-parameters
const useTitle = () => "";
exports.useTitle = useTitle;
// TODO: Allow this when it is assigned to a value whose name implies it is a hook?
// eslint-disable-next-line functional/no-return-void, @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
const useSomeSideEffect = (_input) => { };
exports.useSomeSideEffect = useSomeSideEffect;
// TODO: Allow this when it is defining a react element?
// eslint-disable-next-line functional/prefer-immutable-types, functional/functional-parameters
const Foo = () => {
    // Note: no functional/functional-parameters error here
    const title = (0, exports.useTitle)();
    // Note: no functional/no-expression-statements error here
    (0, exports.useSomeSideEffect)("test");
    return (0, jsx_runtime_1.jsx)("div", { children: title });
};
exports.Foo = Foo;
