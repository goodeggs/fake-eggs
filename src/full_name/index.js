// @flow
import _firstName from '../first_name';
import _lastName from '../last_name';

/**
 * Randomly generates a full name, e.g., `Randall Munroe`. `firstName` and `lastName` can optionally be overridden.
 */
function fullName (firstName?: string, lastName?: string): string {
  if (firstName == null) firstName = _firstName();
  if (lastName == null) lastName = _lastName();
  return `${firstName} ${lastName}`;
}

export default fullName;
