// @flow
import _ from 'lodash';

/**
 * Chooses one of the elements of the provided `array`.
 */

function sample <T> (array: Array<T>): T {
  return _.sample(array);
}

export default sample;
