// @flow

import _ from 'lodash';

import randomArrayElement from '../random_array_element';
import randomString from '../random_string';
import integerInRange from '../integer_in_range';

export default function uri(domain?: string = 'goodeggs.com'): string {
  const uriCharset = 'abcdefghijklmnopqrstuvwxyz_1234567890';
  return [
    randomArrayElement(['http', 'https']),
    '://',
    randomArrayElement([
      `${randomString(integerInRange(1, 7), uriCharset)}.`,
      '']),
    domain,
    '/',
    _.times(integerInRange(1,5), () =>
      randomString(integerInRange(1, 8), uriCharset)
    ).join('/')
  ].join('');
}
