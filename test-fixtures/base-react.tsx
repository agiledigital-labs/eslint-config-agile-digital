// Note: no functional/no-return-void error.
// Note: error on no unused vars and empty function.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useSomeSideEffect = (_input: string): void => {};

// Note: no functional/functional-parameters error
export const useTitle = (): string => "";

// Note: Hook rules are enabled
// eslint-disable-next-line react-hooks/rules-of-hooks
export const title = useTitle();

// Note: no functional/functional-parameters error here
// Note: no functional/prefer-immutable-types error here
export const Foo = (): JSX.Element => {
  // Note: no functional/functional-parameters error here
  const title = useTitle();

  // Note: no functional/no-expression-statements error here
  useSomeSideEffect("test");

  return <div>{title}</div>;
};

// Note: no functional/functional-parameters error here
// Note: Report functional immutable type error if JSX.Element return type is not explicitly specified.
// Note: functional/prefer-immutable-types should not be triggered (it is disabled until library issue is resolved)
export const Boo = () => {
  return <div></div>;
};
