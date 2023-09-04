"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boo = exports.Foo = exports.title = exports.useTitle = exports.useSomeSideEffect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// Note: no functional/no-return-void error.
// Note: error on no unused vars and empty function.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useSomeSideEffect = (_input) => { };
exports.useSomeSideEffect = useSomeSideEffect;
// Note: no functional/functional-parameters error
const useTitle = () => "";
exports.useTitle = useTitle;
// Note: Hook rules are enabled
// eslint-disable-next-line react-hooks/rules-of-hooks
exports.title = (0, exports.useTitle)();
// Note: no functional/functional-parameters error here
// Note: no functional/prefer-immutable-types error here
const Foo = () => {
    // Note: no functional/functional-parameters error here
    const title = (0, exports.useTitle)();
    // Note: no functional/no-expression-statements error here
    (0, exports.useSomeSideEffect)("test");
    return (0, jsx_runtime_1.jsx)("div", { children: title });
};
exports.Foo = Foo;
// Note: no functional/functional-parameters error here
// Note: Report functional immutable type error if JSX.Element return type is not explicitly specified.
// eslint-disable-next-line functional/prefer-immutable-types
const Boo = () => {
    return (0, jsx_runtime_1.jsx)("div", {});
};
exports.Boo = Boo;
