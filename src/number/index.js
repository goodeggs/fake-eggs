// @flow
import sample from '../sample';

export default function number (): number {
  return Math.random() * 1000000 * sample([1, -1]);
}
