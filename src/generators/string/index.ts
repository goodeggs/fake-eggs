import {Chance} from 'chance';

import createIntegerGenerator from '../integer';

const DEFAULT_CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';

/**
 * Generates a random string, optionally of `length` and using chars from provided `charset`.
 */
const createStringGenerator = (chance: Chance.Chance) => (
  length: number = createIntegerGenerator(chance)(1, 40),
  charset: string = DEFAULT_CHARSET,
): string => chance.string({length, pool: charset});

export default createStringGenerator;
