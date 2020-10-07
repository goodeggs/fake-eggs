import {Chance} from 'chance';

/**
 * Generates a random integer (could be negative!). Optionally between `lowerExclusive` and `upperExclusive`.
 */
const createIntegerGenerator = (chance: Chance.Chance) => (
  lowerInclusive?: number,
  upperExclusive?: number,
): number =>
  chance.integer({
    min: lowerInclusive,
    // chance.integer's max param is inclusive
    max: upperExclusive && upperExclusive - 1,
  });

export default createIntegerGenerator;
