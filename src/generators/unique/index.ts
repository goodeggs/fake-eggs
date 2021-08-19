import {Chance} from 'chance';

import {range} from '../../utils';

/**
 * unique accepts a generator function and a number of items to generate and returns an array of
 * unique values. It throws a RangeError when it is unable to generate an array of unique values.
 *
 * By default it compares each new generated value against all other generated values using a
 * `sameValueZero` (`Object.is`) comparsion. You can customize this behavior by passing your own
 * comparator via `options.isEqual`.
 */
const createUniqueGenerator =
  (_chance: Chance.Chance) =>
  <T, A extends unknown[]>(
    generator: (...args: A) => T,
    {
      isEqual = Object.is,
    }: {
      isEqual?: (a: T, b: T) => boolean;
    } = {},
  ): ((...args: A) => T) => {
    const isUniqueValue = (items: T[], val: T): boolean =>
      !items.some((item: T) => isEqual(item, val));
    const results: T[] = [];
    return (...args: A): T => {
      const maxRetries = results.length === 0 ? 50 : 50 * results.length;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const r of range(0, maxRetries)) {
        const value = generator(...args);
        if (isUniqueValue(results, value)) {
          results.push(value);
          return value;
        }
      }
      throw new RangeError(
        `Failed to generate a unique value; the provided generator may not be capable of creating a unique value, or your arguments may be too specific.`,
      );
    };
  };

export default createUniqueGenerator;
