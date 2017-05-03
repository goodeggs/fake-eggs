// @flow

import _firstName from '../first_name';
import _lastName from '../last_name';
import phoneNumber from '../phone_number';
import fullName from '../full_name';
import email from '../email';
import slugify from '../slugify';

export default {
  firstName: _firstName,
  lastName: _lastName,
  phoneNumber,
  fullName,
  email: _email,
};

function _email (options?: {firstName?: string, lastName?: string} = {}): string {
  let {firstName, lastName} = options;
  if (firstName == null)
    firstName = _firstName();
  if (lastName == null)
    lastName = _lastName();
  return email({
    username: `${slugify(firstName)}.${slugify(lastName)}`,
    domain: 'goodeggs.com',
  });
}
