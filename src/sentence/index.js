// @flow
import _ from 'lodash';

import word from '../word';
import integer from '../integer';

/**
 * Generates a random sentence (a string with multiple words).
 */
const sentence = (): string => {
  return _.times(integer(5, 10), () => word()).join(' ');
};

export default sentence;
