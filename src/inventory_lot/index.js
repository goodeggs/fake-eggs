// @flow

import string from '../string';

/**
* Generates an inventory lot label, e.g., "F1A4"
*/
function label (): string {
  return string(4, '0123456789ABCDEF');
}

export default {
  label,
};