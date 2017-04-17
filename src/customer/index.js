// @flow

import firstName from '../first_name';
import lastName from '../last_name';
import phoneNumber from '../phone_number';
import fullName from '../full_name';
import email from '../email';
import randomArrayElement from '../random_array_element';

export default function customer(): {
  firstName: string,
  lastName: string,
  fullName: string,
  phoneNumber: string,
  email: string,
} {
  const _firstName = customer.firstName();
  const _lastName = customer.lastName();
  
  return {
    firstName: _firstName,
    lastName: _lastName,
    fullName: customer.fullName(_firstName, _lastName),
    phoneNumber: customer.phoneNumber(),
    email: customer.email(),
  }
};

customer.firstName = firstName
customer.lastName = lastName
customer.phoneNumber = phoneNumber
customer.fullName = fullName
customer.email = () => email()
