import {Chance} from 'chance';

import createFirstNameGenerator from '../first_name';
import createLastNameGenerator from '../last_name';
import createPhoneNumberGenerator from '../phone_number';
import createFullNameGenerator from '../full_name';
import createEmailGenerator from '../email';

const createCustomerGenerators = (chance: Chance.Chance) => ({
  firstName: createFirstNameGenerator(chance),
  lastName: createLastNameGenerator(chance),
  phoneNumber: createPhoneNumberGenerator(chance),
  fullName: createFullNameGenerator(chance),
  email: createEmailGenerator(chance),
});

export default createCustomerGenerators;
