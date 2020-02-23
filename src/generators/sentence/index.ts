import {Chance} from 'chance';

/**
 * Generates a random sentence (a string with multiple words).
 */
const createSentenceGenerator = (chance: Chance.Chance) => (): string => chance.sentence();

export default createSentenceGenerator;
