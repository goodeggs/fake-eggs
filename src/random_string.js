import _ from 'lodash';
import randomArrayElement from './random_array_element';
import integerInRange from './integer_in_range';

export default function randomString (length, charset) {
  if (_.isNil(length)) length = integerInRange(1, 40);
  if (_.isNil(charset)) charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  const chars = charset.split('');
  return _.times(length, () => randomArrayElement(chars)).join('');
}
module.exports = randomString;