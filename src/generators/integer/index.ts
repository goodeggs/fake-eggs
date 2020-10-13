import {Chance} from 'chance';

/**
 * Generates a random integer (could be negative!). Optionally between `lowerExclusive` and `upperExclusive`.
 * If `lowerInclusive` or `upperExclusive` are not supplied Chance.js will use the range: -9007199254740991 to 9007199254740991
 * https://chancejs.com/basics/integer.html
 */
const createIntegerGenerator = (chance: Chance.Chance) => (
  lowerInclusive?: number,
  upperExclusive?: number,
): number =>
  chance.integer({
    min: lowerInclusive,
    // chance.integer's max param is inclusive
    max: upperExclusive != null ? upperExclusive - 1 : upperExclusive,
  });

export default createIntegerGenerator;
