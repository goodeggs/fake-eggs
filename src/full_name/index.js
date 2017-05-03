// @flow
import _firstName from '../first_name';
import _lastName from '../last_name';

export default function fullName (firstName?: string, lastName?: string): string {
  if (firstName == null) firstName = _firstName();
  if (lastName == null) lastName = _lastName();
  return `${firstName} ${lastName}`;
}
