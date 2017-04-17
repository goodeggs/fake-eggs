// @flow

import firstName from '../first_name';
import lastName from '../last_name';
import phoneNumber from '../phone_number';
import fullName from '../full_name';
import email from '../email';
import slugify from '../slugify';

export default function employee(): {
  firstName: string,
  lastName: string,
  fullName: string,
  phoneNumber: string,
  email: string,
} {
  var _firstName = employee.firstName()
  var _lastName = employee.lastName()
  return {
    firstName: _firstName,
    lastName: _lastName,
    fullName: employee.fullName(_firstName, _lastName),
    phoneNumber: employee.phoneNumber(),
    email: employee.email(_firstName, _lastName),
  }
}

employee.firstName = firstName
employee.lastName = lastName
employee.phoneNumber = phoneNumber
employee.fullName = fullName
employee.email = function(firstName?: string, lastName?: string): string {
  if (firstName == null) firstName = employee.firstName()
  if (lastName == null) lastName = employee.lastName()
  return email(`${slugify(firstName)}.${slugify(lastName)}`, 'goodeggs.com')
}
