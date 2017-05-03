// @flow
import sample from '../sample';

export default function maybe <T> (value: T): ?T {
  return sample([undefined, null, value]);
}
