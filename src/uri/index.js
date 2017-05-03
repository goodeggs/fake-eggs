// @flow

import _ from 'lodash';

import sample from '../sample';
import string from '../string';
import integerInRange from '../integer_in_range';

export default function uri (domain?: string = 'goodeggs.com'): string {
  const uriCharset = 'abcdefghijklmnopqrstuvwxyz_1234567890';
  return [
    sample(['http', 'https']),
    '://',
    sample([
      `${string(integerInRange(1, 7), uriCharset)}.`,
      '']),
    domain,
    '/',
    _.times(integerInRange(1,5), () =>
      string(integerInRange(1, 8), uriCharset)
    ).join('/')
  ].join('');
}
