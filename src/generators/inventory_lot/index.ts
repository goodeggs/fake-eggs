import {Chance} from 'chance';

import createStringGenerator from '../string';

/**
 * Generates an inventory lot label, e.g., "F1A4"
 */
const createLabelGenerator = (chance: Chance.Chance) => (): string =>
  createStringGenerator(chance)(4, '0123456789ABCDEF');

const createInventoryLotGenerators = (chance: Chance.Chance) => ({
  label: createLabelGenerator(chance),
});

export default createInventoryLotGenerators;
