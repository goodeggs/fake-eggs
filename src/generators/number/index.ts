import {Chance} from 'chance';

const EPSILON = 0.0000001;
const MAX_PRECISION = 6;
/**
 * Generates a random `number`, optionally between `lowerInclusive` and `upperExclusive` with `fixed` number of digits after the decimal.
 */
const createNumberGenerator =
  (chance: Chance.Chance) =>
  (lowerInclusive = -1000000, upperExclusive = 1000000, fixed = 4): number => {
    if (fixed != null && fixed > MAX_PRECISION) {
      throw new TypeError(`"fixed" must be less than or equal to ${MAX_PRECISION} or null`);
    }

    return chance.floating({
      min: lowerInclusive,
      // chance.floating() returns 4 digits after the decimal by default, and its `max` is inclusive
      max: upperExclusive - EPSILON,
      fixed,
    });
  };

export default createNumberGenerator;
