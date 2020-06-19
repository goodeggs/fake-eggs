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
  if (from == null) {
    // https://github.com/goodeggs/avocado/commit/143f03ff267766be62189f901a174b02006650eb
    from = 'Tue Oct 04 2011 10:44:00 GMT-0700 (PDT)';
  }
  if (typeof from === 'string') {
    from = new Date(from);
  }
  if (Number.isNaN(from.valueOf())) {
    throw new RangeError('`from` is not a valid date');
  }

  if (to == null) {
    // ¯\_(ツ)_/¯
    to = 'Tue Dec 31 2019 16:00:00 GMT-0800 (PST)';
  }
  if (typeof to === 'string') {
    to = new Date(to);
  }
  if (Number.isNaN(to.valueOf())) {
    throw new RangeError('`to` is not a valid date');
  }

  const integer = createIntegerGenerator(chance);
  return new Date(integer(dateInSeconds(from), dateInSeconds(to)) * 1000);
};

export default createDateGenerator;
