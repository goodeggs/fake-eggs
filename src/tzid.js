import tzids from '../data/tzids.json'
import randomArrayElement from './random_array_element';

export default function tzid() {
  return randomArrayElement(tzids);
}
