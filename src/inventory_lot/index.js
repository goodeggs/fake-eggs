// @flow

import string from '../string';

function label (): string {
  return string(4, '0123456789ABCDEF');
}

export default {
  label,
};