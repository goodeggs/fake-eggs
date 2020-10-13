import {Chance} from 'chance';

import createIntegerGenerator from '../integer';

const dateInSeconds = (_date: Date | string): number => {
  return Math.floor(new Date(_date).valueOf() / 1000);
};

/**
 * Returns a randomly-selected `Date`, optionally between `from` and `to`.
 */
const createDateGenerator = (chance: Chance.Chance) => (
  from?: Date | string,
  to?: Date | string,
): Date => {
  // https://tc39.es/ecma262/#sec-time-values-and-time-range
  // https://tc39.es/ecma262/#_ref_6257:~:text=A%20Number%20can%20exactly%20represent%20all,beginning%20of%2001%20January%2C%201970%20UTC.
  const minTimeMilliseconds = -8640000000000000;
  const maxTimeMilliseconds = 8640000000000000;
  const integer = createIntegerGenerator(chance);

  if (from == null) {
    from = new Date(minTimeMilliseconds);
  }
  if (typeof from === 'string') {
    from = new Date(from);
  }
  if (Number.isNaN(from.valueOf())) {
    throw new RangeError('`from` is not a valid date');
  }

  if (to == null) {
    to = new Date(maxTimeMilliseconds);
  }
  if (typeof to === 'string') {
    to = new Date(to);
  }
  if (Number.isNaN(to.valueOf())) {
    throw new RangeError('`to` is not a valid date');
  }

  return new Date(integer(dateInSeconds(from), dateInSeconds(to)) * 1000);
};

export default createDateGenerator;
