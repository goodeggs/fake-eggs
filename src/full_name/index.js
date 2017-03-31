import firstName from '../first_name';
import lastName from '../last_name';

export default function fullName(_firstName, _lastName) {
  if (!_firstName) _firstName = firstName();
  if (!_lastName) _lastName = lastName();
  return `${_firstName} ${_lastName}`;
}

module.exports = fullName;
