import {Chance} from 'chance';

/**
 * Generates a random phone number, e.g. `+15556797779`.
 */
const createPhoneNumberGenerator = (chance: Chance.Chance) => (): string =>
  `+${chance.phone({country: 'us', formatted: false})}`;

export default createPhoneNumberGenerator;
