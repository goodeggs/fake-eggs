import {Chance} from 'chance';

import createFirstNameGenerator from '../first_name';
import createLastNameGenerator from '../last_name';

/**
 * Randomly generates a full name, e.g., `Randall Munroe`. `firstName` and `lastName` can optionally be overridden.
 */
const createFullNameGenerator =
  (chance: Chance.Chance) =>
  (firstName?: string, lastName?: string): string => {
    const _firstName = createFirstNameGenerator(chance);
    const _lastName = createLastNameGenerator(chance);
    return `${firstName != null ? firstName : _firstName()} ${
      lastName != null ? lastName : _lastName()
    }`;
  };

export default createFullNameGenerator;
