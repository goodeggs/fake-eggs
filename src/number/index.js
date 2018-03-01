// @flow
import sample from '../sample';

/**
 * Generates a random `number`, optionally between `lowerInclusive` and `upperExclusive`.
 */
function number (
  lowerInclusive: number = -1000000,
  upperExclusive: number = 1000000,
): number {
  return Math.random() * (upperExclusive - lowerInclusive) + lowerInclusive;
}

export default number;
