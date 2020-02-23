import {Chance} from 'chance';

/**
 * Generates a random `number`, optionally between `lowerInclusive` and `upperExclusive`.
 */
const createNumberGenerator = (chance: Chance.Chance) => (
  lowerInclusive = -1000000,
  upperExclusive = 1000000,
): number =>
  chance.floating({
    min: lowerInclusive,
    // chance.floating() returns 4 digits after the decimal at most, and its `max` is inclusive
    max: upperExclusive - 0.0001,
  });

export default createNumberGenerator;
