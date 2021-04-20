import {Chance} from 'chance';

/**
 * Generates a random phone number, e.g. `+15556797779`.
 */
const createPhoneNumberGenerator = (chance: Chance.Chance) => (): string =>
  `+1${chance.phone({country: 'us', formatted: false})}`;

export default createPhoneNumberGenerator;
