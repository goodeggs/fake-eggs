import {Chance} from 'chance';

import createInteger from '../integer';

/**
 * array creates an array of a length between `lengthLowerInclusive` and `lengthUpperInclusive`
 * using the supplied `generator` to create elements.
 */
const createArrayGenerator =
  (chance: Chance.Chance) =>
  <T>(lengthLowerInclusive: number, lengthUpperExclusive: number, generator: () => T): T[] => {
    const integer = createInteger(chance);
    return new Array(integer(lengthLowerInclusive, lengthUpperExclusive))
      .fill(null)
      .map(() => generator());
  };

export default createArrayGenerator;
