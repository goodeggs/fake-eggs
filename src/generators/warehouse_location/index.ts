import {Chance} from 'chance';

import createSampleGenerator from '../sample';
import createIntegerGenerator from '../integer';
import createStringGenerator from '../string';

/**
 * Returns a random zone, e.g. `chill`.
 */
const createZoneGenerator = (chance: Chance.Chance) => (): string => {
  const sample = createSampleGenerator(chance);
  return sample(['chill', 'dry', 'frozen', 'produce']);
};

/**
 * Returns a random aisle, e.g., `F`.
 */
const createAisleGenerator = (chance: Chance.Chance) => (): string =>
  createStringGenerator(chance)(1, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');

/**
 * Returns a random rack, e.g., `12`;
 */
const createRackGenerator = (chance: Chance.Chance) => (): string =>
  createIntegerGenerator(chance)(1, 50).toString(10);

/**
 * Returns a random shelf, e.g., `3`
 */
const createShelfGenerator = (chance: Chance.Chance) => (): string =>
  createIntegerGenerator(chance)(1, 5).toString(10);

/**
 * Returns a location label for a warehouse location, e.g., `cF12-3`
 */
const createLabelGenerator = (chance: Chance.Chance) => (): string => {
  return `${createStringGenerator(chance)(1, 'cdfp')}${createAisleGenerator(
    chance,
  )()}${createRackGenerator(chance)()}-${createShelfGenerator(chance)()}`;
};

const createWarehouseLocationGenerators = (chance: Chance.Chance) => ({
  aisle: createAisleGenerator(chance),
  label: createLabelGenerator(chance),
  rack: createRackGenerator(chance),
  shelf: createShelfGenerator(chance),
  zone: createZoneGenerator(chance),
});

export default createWarehouseLocationGenerators;
