// @flow
export default function integer (lower: number = -100, upper: number = 100): number {
  const range = upper - lower;
  const rand = Math.floor(Math.random() * range);
  return lower + rand;
}
