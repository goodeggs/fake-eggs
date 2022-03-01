import {Chance} from 'chance';

import createAddressGenerator from '../address';
import createStateGenerator from '../state';
import createZipGenerator from '../zip';

interface Location {
  address: ReturnType<typeof createAddressGenerator>;
  state: ReturnType<typeof createStateGenerator>;
  zip: ReturnType<typeof createZipGenerator>;
}

const createLocationGenerators = (chance: Chance.Chance): Location => ({
  address: createAddressGenerator(chance),
  state: createStateGenerator(chance),
  zip: createZipGenerator(chance),
});

export default createLocationGenerators;
