// @flow

import _ from 'lodash';
import digit from '../digit';

export default function phoneNumber(): string {
  return `+1555${_.times(7, digit).join('')}`;
}
