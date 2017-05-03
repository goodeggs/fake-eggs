// @flow

import _ from 'lodash';

import sample from '../sample';
import integerInRange from '../integer_in_range';

export default function string (length?: number, charset?: string): string {
  if (length == null) length = integerInRange(1, 40);
  if (charset == null) charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  const chars = charset.split('');
  return _.times(length, () => sample(chars)).join('');
}
