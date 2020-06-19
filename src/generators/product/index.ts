import {Chance} from 'chance';

import createSampleGenerator from '../sample';
import createIntegerGenerator from '../integer';
import {productNames, productUnits, storageTypes} from './fixtures';

/**
 * Generates a random product name, e.g. `Hargrand Apricots`.
 */
const name = (chance: Chance.Chance) => (): string => {
  return createSampleGenerator(chance)(productNames);
};

/**
 * Generates a random product unit, e.g. `count`.
 */
const unit = (chance: Chance.Chance) => (): string => {
  return createSampleGenerator(chance)(productUnits);
};

/**
 * Generates a random storage type, e.g., `chill`.
 */
const storageType = (chance: Chance.Chance) => (): string => {
  return createSampleGenerator(chance)(storageTypes);
};

/**
 * Generates a random product count, e.g., `31`.
 */
const count = (chance: Chance.Chance) => (): number => createIntegerGenerator(chance)(1, 100);

const createProductGenerators = (chance: Chance.Chance) => ({
  count: count(chance),
  name: name(chance),
  storageType: storageType(chance),
  unit: unit(chance),
});

export default createProductGenerators;
