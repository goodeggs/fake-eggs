// @flow

import _ from 'lodash';
import digit from '../digit';

/**
 * Generates a random phone number, e.g. `+15556797779`.
*/
function phoneNumber(): string {
  return `+1555${_.times(7, digit).join('')}`;
}

export default phoneNumber;
