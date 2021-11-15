import {Chance} from 'chance';

/**
 * Returns a random 2 letter state (e.g., 'CA').
 */
const createStateGenerator = (chance: Chance.Chance) => (): string => {
  return chance.state();
};

export default createStateGenerator;
