// @flow
import sample from '../sample';

const returnUndefined = () => undefined;

/**
 * Returns `undefined` or the result of the supplied `returnValue` function.
 *
 * Useful for specifying optional object properties in Flow, e.g.:
 *
 * ```
 * {
 *   optionalValue?: boolean,
 * }
 * ```
 */
export default function optional<T>(returnValue: () => T): T | void {
  const getter = sample([returnUndefined, returnValue]);
  return getter();
}
