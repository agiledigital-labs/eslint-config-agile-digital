// Note: no functional/no-return-void error.
// Note: error on no unused vars and empty function.
// eslint-disable-next-line filename-rules/match, react-refresh/only-export-components, jsdoc/require-jsdoc
export const useSomeSideEffect = (_input: string): void => {};

// Note: no functional/functional-parameters error
// eslint-disable-next-line react-refresh/only-export-components, jsdoc/require-jsdoc
export const useTitle = (): string => "";

// Note: Hook rules are enabled
// eslint-disable-next-line react-hooks/rules-of-hooks, react-refresh/only-export-components, jsdoc/require-jsdoc
export const title = useTitle();

// Note: no functional/functional-parameters error here
// Note: no functional/prefer-immutable-types error here
// eslint-disable-next-line jsdoc/require-jsdoc
export const Foo = (): JSX.Element => {
  // Note: no functional/functional-parameters error here
  // eslint-disable-next-line jsdoc/require-jsdoc
  const title = useTitle();

  // Note: no functional/no-expression-statements error here
  useSomeSideEffect("test");

  return <div>{title}</div>;
};

// Note: no functional/functional-parameters error here
// Note: Report functional immutable type error if JSX.Element return type is not explicitly specified.
// eslint-disable-next-line functional/prefer-immutable-types, jsdoc/require-jsdoc
export const Boo = () => <div />;
