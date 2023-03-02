"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = exports.useSomeSideEffect = exports.useTitle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// TODO: Allow this when it is assigned to a value whose name implies it is a hook?
// eslint-disable-next-line functional/functional-parameters
const useTitle = () => "";
exports.useTitle = useTitle;
// TODO: Allow this when it is assigned to a value whose name implies it is a hook?
// eslint-disable-next-line functional/no-return-void
const useSomeSideEffect = (input) => {
    // Note: no functional/no-expression-statements error here
    console.info(input);
};
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
