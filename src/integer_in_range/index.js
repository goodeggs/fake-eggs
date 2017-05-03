// @flow
export default function integerInRange (lower: number, upper: number): number {
  const range = upper - lower;
  const rand = Math.floor(Math.random() * range);
  return lower + rand;
}
