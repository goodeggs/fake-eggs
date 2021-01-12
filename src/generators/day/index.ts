import {Chance} from 'chance';

import createDateGenerator from '../date';

// Avoids pulling in something like moment.js just for this.
const DAY_REGEX = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Strictly speaking, the ISO 8601 date format, though often abbreviated as "YYYY-MM-DD", allows for
 * an "extended" format containing a year with 5 to 6 digits preceded by a +/- sign:
 * https://tc39.es/ecma262/#sec-expanded-years.
 *
 * For convenience, this can be further narrowed to the range that would be expressible as
 * JavaScript `Dates`: approximately -271821-04-20 to +275760-09-13.
 *
 * However, supporting these formats breaks a number of assumptions in Good Eggs code and perhaps in
 * third-party libraries:
 * - sorting "date" strings alphanumerically results in a chronological sort
 * - extracting the "date" part of a `Date` as "YYYY-MM-DD" will always work
 * - etc.
 *
 * It doesn't seem worthwhile to require thousands of calls to `fake.day()` across repos that use
 * fake-eggs to pass in custom ranges to deal with this, nor to require thousands of calls to
 * moment.js's `.format('YYYY-MM-DD')` to be updated, since realistically we will never need to
 * manipulate dates over a thousand years ago nor dates eight thousand years from now, and
 * realistically our code will not run for eight thousand years. Therefore, we choose to support a
 * further narrowed range called "Complete date" by the W3C: https://www.w3.org/TR/NOTE-datetime.
 *
 * Finally, for convenience (e.g. generating a random day then adding or subtracting days), we clamp
 * the default range a bit further.
 */
export const DEFAULT_FROM = '1001-01-01';
export const DEFAULT_TO = '9999-01-01';

type DayString = string;

/**
 * Returns a randomly-selected ISO 8601 day string (`YYYY-MM-DD`), optionally between `from` and `to`.
 * TODO(serhalp) Consider dropping support for `from` and `to` being `Date`s as this is complex to
 * support and has many caveats.
 */
const createDayGenerator = (chance: Chance.Chance) => (
  from: Date | DayString = DEFAULT_FROM,
  to: Date | DayString = DEFAULT_TO,
): string => {
  if (typeof from === 'string' && !DAY_REGEX.test(from)) {
    throw new TypeError('`from` must be a Date or a YYYY-MM-DD string');
  }
  if (typeof to === 'string' && !DAY_REGEX.test(to)) {
    throw new TypeError('`to` must be a Date or a YYYY-MM-DD string');
  }

  const _date = createDateGenerator(chance);
  // Note that much of what follows is dependent on the environment's time zone, which generally
  // should always be avoided, but since we're generating random data here, it seems OK, especially
  // given the alternative is to pull in a whole library like moment.js.
  const date = _date(new Date(from), new Date(to));
  const year = String(date.getFullYear()).padStart(4, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${dayOfMonth}`;
};

export default createDayGenerator;
