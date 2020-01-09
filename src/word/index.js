// @flow
import string from '../string';

/**
 * Generates a random word (a string without any whitespace), optionally of `length` and using chars
 * from provided `charset`.
 */
const word = (length?: number, charset?: string): string => {
  if (charset == null) {
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  return string(length, charset);
};

export default word;
