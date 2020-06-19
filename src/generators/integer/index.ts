import {Chance} from 'chance';

/**
 * Generates a random integer (could be negative!). Optionally between `lowerExclusive` and `upperExclusive`.
 */
const createIntegerGenerator = (chance: Chance.Chance) => (
  lowerInclusive = -100,
  upperExclusive = 100,
): number =>
  chance.integer({
    min: lowerInclusive,
    // chance.integer's max param is inclusive
    max: upperExclusive - 1,
  });

export default createIntegerGenerator;
