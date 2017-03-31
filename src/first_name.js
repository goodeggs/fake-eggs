import firstNames from '../data/first_names.json'
import randomArrayElement from './random_array_element';

export default function firstName() { return randomArrayElement(firstNames) }
