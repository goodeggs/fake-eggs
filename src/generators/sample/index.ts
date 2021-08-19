import {Chance} from 'chance';

import createIntegerGenerator from '../integer';

/**
 * Chooses one of the elements of the provided `array`.
 */
const createSampleGenerator =
  (chance: Chance.Chance) =>
  <T>(array: T[]): T => {
    // Without this check, the return type must be T?, which would make this function unwieldy to use.
    // (This reflects how we intend to use fake.sample anyway.)
    if (array.length === 0) {
      throw new RangeError('fake.array cannot be passed an empty array');
    }
    const integer = createIntegerGenerator(chance);
    return array[integer(0, array.length)];
  };

export default createSampleGenerator;
