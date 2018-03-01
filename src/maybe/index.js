// @flow
import sample from '../sample';

const returnUndefined = () => undefined;
const returnNull = () => null;

/**
 * Potentially returns `null`, `undefined`, or the result of the supplied `returnValue` function.
 */
function maybe <T> (returnValue: () => T): ?T {
  const getter = sample([
    returnUndefined,
    returnNull,
    returnValue,
  ]);
  
  return getter();
}

export default maybe;
