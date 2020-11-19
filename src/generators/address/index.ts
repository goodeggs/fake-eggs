import {Chance} from 'chance';

/**
 * Returns a random street address string (e.g., `5447 Bazpe Lane`).
 */
const createAddressGenerator = (chance: Chance.Chance) => (): string => {
  return chance.address();
};

export default createAddressGenerator;
