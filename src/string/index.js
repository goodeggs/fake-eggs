// @flow

import _ from 'lodash';

import sample from '../sample';
import integer from '../integer';

/**
 * Generates a random string, optionally of `length` and using chars from provided `charset`.
 */
function string (length?: number, charset?: string): string {
  if (length == null) length = integer(1, 40);
  if (charset == null) charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  const chars = charset.split('');
  return _.times(length, () => sample(chars)).join('');
}

export default string;
