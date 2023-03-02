// TODO: Allow this when it is assigned to a value whose name implies it is a hook?
// eslint-disable-next-line functional/functional-parameters
export const useTitle = (): string => "";

// Note: no functional/no-expression-statements error here
console.info("test");

// TODO: Allow this when it is defining a react element?
// eslint-disable-next-line functional/prefer-immutable-types, functional/functional-parameters
export const Foo = (): JSX.Element => {
  // Note: no functional/functional-parameters error here
  const title = useTitle();
  return <div>{title}</div>;
};
