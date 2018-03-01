// @flow

/**
 * Generates a random integer (could be negative!). Optionally between `lowerExclusive` and `upperExclusive`.
 */
function integer (lowerInclusive: number = -100, upperExclusive: number = 100): number {
  const range = upperExclusive - lowerInclusive;
  const rand = Math.floor(Math.random() * range);
  return lowerInclusive + rand;
}

export default integer;
