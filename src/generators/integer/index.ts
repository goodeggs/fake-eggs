import {Chance} from 'chance';

/**
 * By default, Chance.js would use range -9007199254740991 (-2^53 - 1) to 9007199254740991 (2^53 - 1).
 * See https://chancejs.com/basics/integer.html.
 *
 * However, per the GraphQL spec, Integers are only treated as valid when they are representable as
 * a 32-bit signed integer: https://spec.graphql.org/June2018/#sec-Int.
 *
 * It doesn't seem worthwhile to provide two separate integer functions in fake-eggs, nor to require
 * thousands of calls to `fake.integer()` across apps that use GraphQL to pass in ranges to deal
 * with this inconsistency, so just default to a valid 32-bit signed integer range here.
 *
 */
const DEFAULT_LOWER_INCLUSIVE = -2147483648;
const DEFAULT_UPPER_EXCLUSIVE = 2147483647;

/**
 * Generates a random integer (could be negative!). Optionally between `lowerExclusive` and `upperExclusive`.
 * If `lowerInclusive` or `upperExclusive` are not supplied, will be between -2147483648 and 2147483647.
 */
const createIntegerGenerator =
  (chance: Chance.Chance) =>
  (
    lowerInclusive: number = DEFAULT_LOWER_INCLUSIVE,
    upperExclusive: number = DEFAULT_UPPER_EXCLUSIVE,
  ): number =>
    chance.integer({
      min: lowerInclusive,
      // chance.integer's max param is inclusive
      max: upperExclusive - 1,
    });

export default createIntegerGenerator;
