import {Chance} from 'chance';

/**
 * Generates a random `number`, optionally between `lowerInclusive` and `upperExclusive` with `fixed` number of digits after the decimal.
 */
const createNumberGenerator = (chance: Chance.Chance) => (
  lowerInclusive = -1000000,
  upperExclusive = 1000000,
  fixed = 4,
): number =>
  chance.floating({
    min: lowerInclusive,
    max: upperExclusive,
    fixed,
  });

export default createNumberGenerator;
