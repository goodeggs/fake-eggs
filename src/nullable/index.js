// @flow
import sample from '../sample';

const returnNull = () => null;

/**
 * Potentially returns `null`, or the result of the supplied `returnValue` function.
 *
 * Useful for nullable types in Flow, e.g.:
 *
 * ```
 * {
 *   nullableValue: boolean | null,
 * }
 * ```
 */
export default function nullable<T>(returnValue: () => T): T | null {
  const getter = sample([returnNull, returnValue]);

  return getter();
}
