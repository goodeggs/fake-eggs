// @flow
import times from 'lodash/times';

import integer from '../integer';

export default function array <T> (lengthLowerInclusive: number, lengthUpperExclusive: number, generator: () => T): Array<T> {
  return times(integer(lengthLowerInclusive, lengthUpperExclusive), () => generator());
}