import {Chance} from 'chance';

import createFirstNameGenerator from '../first_name';
import createLastNameGenerator from '../last_name';
import createPhoneNumberGenerator from '../phone_number';
import createFullNameGenerator from '../full_name';
import createEmailGenerator from '../email';
import {slugify} from '../../utils';

/**
 * Returns a randomly-selected email address at goodeggs.com of the form `randall.munroe@goodeggs.com`.
 * You can override `firstName` and `lastName` by providing appropriate options.
 */
const createEmployeeEmailGenerator =
  (chance: Chance.Chance) =>
  (options: {firstName?: string; lastName?: string} = {}): string => {
    const firstName =
      options.firstName != null ? options.firstName : createFirstNameGenerator(chance)();
    const lastName =
      options.lastName != null ? options.lastName : createLastNameGenerator(chance)();
    return createEmailGenerator(chance)({
      username: `${slugify(firstName)}.${slugify(lastName)}`,
      domain: 'goodeggs.com',
    });
  };

interface Employee {
  firstName: ReturnType<typeof createFirstNameGenerator>;
  lastName: ReturnType<typeof createLastNameGenerator>;
  phoneNumber: ReturnType<typeof createPhoneNumberGenerator>;
  fullName: ReturnType<typeof createFullNameGenerator>;
  email: ReturnType<typeof createEmployeeEmailGenerator>;
}

const createEmployeeGenerators = (chance: Chance.Chance): Employee => ({
  firstName: createFirstNameGenerator(chance),
  lastName: createLastNameGenerator(chance),
  phoneNumber: createPhoneNumberGenerator(chance),
  fullName: createFullNameGenerator(chance),
  email: createEmployeeEmailGenerator(chance),
});

export default createEmployeeGenerators;
