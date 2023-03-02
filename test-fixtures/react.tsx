// TODO: Allow this when it is assigned to a value whose name implies it is a hook?
// eslint-disable-next-line functional/functional-parameters
export const useTitle = (): string => "";

// TODO: Allow this when it is assigned to a value whose name implies it is a hook?
// eslint-disable-next-line functional/no-return-void
export const useSomeSideEffect = (input: string): void => {
  // Note: no functional/no-expression-statements error here
  console.info(input);
};

// TODO: Allow this when it is defining a react element?
// eslint-disable-next-line functional/prefer-immutable-types, functional/functional-parameters
export const Foo = (): JSX.Element => {
  // Note: no functional/functional-parameters error here
  const title = useTitle();

  // Note: no functional/no-expression-statements error here
  useSomeSideEffect("test");

  return <div>{title}</div>;
};
