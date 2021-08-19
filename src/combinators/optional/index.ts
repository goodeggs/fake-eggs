import {Chance} from 'chance';

import createSampleGenerator from '../../generators/sample';

const alwaysUndefined = (): undefined => undefined;

/**
 * Potentially returns `undefined` or the result of the supplied `alwaysValue` function.
 *
 * Useful for maybe types in Flow, e.g.:
 *
 * ```
 * {
 *   maybeValue: ?boolean,
 * }
 * ```
 */
const createOptionalCombinator =
  (chance: Chance.Chance) =>
  <T>(alwaysValue: () => T): T | undefined => {
    const sample = createSampleGenerator(chance);
    const getter = sample([alwaysUndefined, alwaysValue]);
    return getter();
  };

export default createOptionalCombinator;
