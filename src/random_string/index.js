// @flow

import _ from 'lodash';

import randomArrayElement from '../random_array_element';
import integerInRange from '../integer_in_range';

export default function randomString (length?: number, charset?: string): string {
  if (length == null) length = integerInRange(1, 40);
  if (charset == null) charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  const chars = charset.split('');
  return _.times(length, () => randomArrayElement(chars)).join('');
}
