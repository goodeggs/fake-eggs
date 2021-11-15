import {Chance} from 'chance';

import createAddressGenerator from '../address';
import createStateGenerator from '../state';
import createZipGenerator from '../zip';

const createLocationGenerators = (chance: Chance.Chance) => ({
  address: createAddressGenerator(chance),
  state: createStateGenerator(chance),
  zip: createZipGenerator(chance),
});

export default createLocationGenerators;
