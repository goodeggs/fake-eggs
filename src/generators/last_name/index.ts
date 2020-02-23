import {Chance} from 'chance';

/**
 * Generates a random last name, e.g., `Armstrong`.
 */
const createLastNameGenerator = (chance: Chance.Chance) => (): string => chance.last();

export default createLastNameGenerator;
