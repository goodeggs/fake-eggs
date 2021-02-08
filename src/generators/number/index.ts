import { Chance } from 'chance';

/**
 * Generates a random `number`, optionally between `lowerInclusive` and `upperExclusive` with `fixed` number of digits after the decimal.
 */
const createNumberGenerator = (chance: Chance.Chance) => (
  lowerInclusive = -1000000,
  upperExclusive = 1000000,
  fixed = 4,
): number => {
  const EPSILON = 0.0000001;
  const MAX_PRECISION = 6;

  if (upperExclusive != null && upperExclusive > MAX_PRECISION) {
    throw new TypeError(`"upperExclusive" must be less than or equal to ${MAX_PRECISION} or null`);
  }

  return chance.floating({
    min: lowerInclusive,
    max: upperExclusive - EPSILON,
    fixed,
  });
}

export default createNumberGenerator;
