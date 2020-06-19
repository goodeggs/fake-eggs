import {Chance} from 'chance';

import createSampleGenerator from '../../generators/sample';

const alwaysUndefined = (): undefined => undefined;
const alwaysNull = (): null => null;

/**
 * Potentially returns `null`, `undefined`, or the result of the supplied `alwaysValue` function.
 *
 * Useful for maybe types in Flow, e.g.:
 *
 * ```
 * {
 *   maybeValue: ?boolean,
 * }
 * ```
 */
const createMaybeCombinator = (chance: Chance.Chance) => <T>(
  alwaysValue: () => T,
): T | null | undefined => {
  const sample = createSampleGenerator(chance);
  const getter = sample([alwaysUndefined, alwaysNull, alwaysValue]);
  return getter();
};

export default createMaybeCombinator;
