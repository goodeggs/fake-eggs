// @flow
import times from 'lodash/times';

import integer from '../integer';

/**
 * Calls supplied `generator` function to return an array of length `lengthLowerInclusive` and `lengthUpperInclusive`.
 */
function array <T> (lengthLowerInclusive: number, lengthUpperExclusive: number, generator: () => T): Array<T> {
  return times(integer(lengthLowerInclusive, lengthUpperExclusive), () => generator());
}

export default array;