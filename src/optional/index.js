// @flow
import sample from '../sample';

const returnUndefined = () => undefined;

/**
 * Returns `undefined` or the result of the supplied `returnValue` function.
 */
export default function optional<T>(returnValue: () => T): T | void {
  const getter = sample([returnUndefined, returnValue]);
  return getter();
}
