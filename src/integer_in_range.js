export default function integerInRange(lower, upper) {
  const range = upper - lower;
  const rand = Math.floor(Math.random() * range);
  return lower + rand;
}
