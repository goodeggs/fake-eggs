import {Chance} from 'chance';

import createIntegerGenerator from '../integer';

const dateInSeconds = (_date: Date | string): number => {
  return Math.floor(new Date(_date).valueOf() / 1000);
};

/**
 * For convenience of compatibility with `fake.day()` defaults, use 1001-01-01 00:00:00 and
 * 9999-01-01 00:00:00 as the default `from` and `to`, respectively. See comment in `fake.day()` for
 * context on why we use these defaults.
 */
const DEFAULT_FROM = new Date(-30578688000000);
const DEFAULT_TO = new Date(253370764800000);

/**
 * Returns a randomly-selected `Date`, optionally between `from` and `to`.
 */
const createDateGenerator =
  (chance: Chance.Chance) =>
  (from: Date | string = DEFAULT_FROM, to: Date | string = DEFAULT_TO): Date => {
    const integer = createIntegerGenerator(chance);

    if (typeof from === 'string') {
      from = new Date(from);
    }
    if (Number.isNaN(from.valueOf())) {
      throw new RangeError('`from` is not a valid date');
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
