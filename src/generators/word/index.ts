import {Chance} from 'chance';

import createStringGenerator from '../string';

const DEFAULT_CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Generates a random word (a string without any whitespace), optionally of `length` and using chars
 * from provided `charset`.
 */
const createWordGenerator =
  (chance: Chance.Chance) =>
  (length?: number, charset: string = DEFAULT_CHARSET): string =>
    createStringGenerator(chance)(length, charset);

export default createWordGenerator;
