import {Chance} from 'chance';

/**
 * Returns `true` or `false`, chosen at random.
 */
const createBooleanGenerator = (chance: Chance.Chance) => (): boolean => chance.bool();

export default createBooleanGenerator;
