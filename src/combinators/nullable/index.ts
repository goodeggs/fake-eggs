import {Chance} from 'chance';

import createSampleGenerator from '../../generators/sample';

const alwaysNull = (): null => null;

/**
 * Potentially returns `null` or the result of the supplied `alwaysValue` function.
 *
 * Useful for maybe types in Flow, e.g.:
 *
 * ```
 * {
 *   maybeValue: ?boolean,
 * }
 * ```
 */
const createNullableCombinator = (chance: Chance.Chance) => <T>(alwaysValue: () => T): T | null => {
  const sample = createSampleGenerator(chance);
  const getter = sample([alwaysNull, alwaysValue]);
  return getter();
};

export default createNullableCombinator;
