// @flow
import _ from 'lodash';

export default function sample <T> (array: Array<T>): T {
  return _.sample(array);
}
