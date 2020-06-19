import {Chance} from 'chance';

import createIntegerGenerator from '../integer';

/**
Returns a randomly-selected digit (integer between 0 and 9).
*/
const createDigitGenerator = (chance: Chance.Chance) => (): number =>
  createIntegerGenerator(chance)(0, 10);

export default createDigitGenerator;
