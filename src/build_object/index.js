// @flow

type FunctionThatReturnsType = <V> (V) => (() => V);

export default <T: Object> function (creators: $ObjMap<T, FunctionThatReturnsType>): (input: {|
  [k: $Keys<T>]: any // TODO, when this is supported, use $PropertyType annotation here too 
|}) => T {
  return (input) => Object.keys(creators)
    .reduce(
      (acc, key) => {
        let value = input[key];
        if (value == null) value = creators[key]();
        return Object.assign(acc, { [key] => value})
      },
      {},
    );
}