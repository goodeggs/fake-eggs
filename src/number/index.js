// @flow
import sample from '../sample';

export default function number (
  lowerInclusive: number = -1000000,
  upperExclusive: number = 1000000,
): number {
  return Math.random() * (upperExclusive - lowerInclusive) + lowerInclusive;
}
