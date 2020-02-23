import {Chance} from 'chance';

/**
 * Returns a randomly-selected first name, e.g. `Carter`.
 */
const createFirstNameGenerator = (chance: Chance.Chance) => (): string => chance.first();

export default createFirstNameGenerator;
