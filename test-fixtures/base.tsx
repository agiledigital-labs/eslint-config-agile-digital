// Note: no functional/no-expression-statements error here
console.info("hello");

// Note: no-template-curly-in-string is on
// eslint-disable-next-line no-template-curly-in-string
export const whoops = "${whoops}";

// TODO: Allow this when it is assigned to a value whose name implies it is a hook?
// eslint-disable-next-line functional/functional-parameters
export const useTitle = (): string => "";

// TODO: Allow this when it is assigned to a value whose name implies it is a hook?
// eslint-disable-next-line functional/no-return-void, @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
export const useSomeSideEffect = (_input: string): void => {};

// TODO: Allow this when it is defining a react element?
// eslint-disable-next-line functional/prefer-immutable-types, functional/functional-parameters
export const Foo = (): JSX.Element => {
  // Note: no functional/functional-parameters error here
  const title = useTitle();

  // Note: no functional/no-expression-statements error here
  useSomeSideEffect("test");

  return <div>{title}</div>;
};
