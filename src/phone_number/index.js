// @flow

import _ from 'lodash';
import randomDigit from '../random_digit';

export default function phoneNumber(): string {
  return `+1555${_.times(7, randomDigit).join('')}`;
}
