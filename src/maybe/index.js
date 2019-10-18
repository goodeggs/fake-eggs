// @flow
import sample from '../sample';

const returnUndefined = () => undefined;
const returnNull = () => null;

/**
 * Potentially returns `null`, `undefined`, or the result of the supplied `generator` function, if
 * any.
 *
 * Useful for maybe types in Flow, e.g.:
 *
 * ```
 * {
 *   maybeValue: ?boolean,
 * }
 * ```
 */
function maybe<T>(generator?: () => T): ?T {
  const getter = sample([
    returnUndefined,
    returnNull,
    ...(generator != null ? [generator] : []),
  ]);

  return getter();
}

export default maybe;
