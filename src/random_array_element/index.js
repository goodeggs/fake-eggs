// @flow
import integerInRange from '../integer_in_range';

export default function randomArrayElement <T> (array: Array<T>): T {
  return array[integerInRange(0, array.length)];
}
