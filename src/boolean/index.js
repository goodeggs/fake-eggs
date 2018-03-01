// @flow
import sample from '../sample';

/**
* Returns `true` or `false`, chosen at random.
*/
function boolean (): boolean {
  return sample([true, false]);
}

export default boolean;
