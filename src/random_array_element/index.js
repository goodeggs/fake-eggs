import integerInRange from '../integer_in_range';

export default function randomArrayElement(array) {
  return array[integerInRange(0, array.length)]
}
module.exports = randomArrayElement;