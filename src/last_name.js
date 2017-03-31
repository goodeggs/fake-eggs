import lastNames from '../data/last_names.json'
import randomArrayElement from './random_array_element';

export default function lastName() { return randomArrayElement(lastNames) }
