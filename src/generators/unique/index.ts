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
const createUniqueGenerator = (_chance: Chance.Chance) => <T>(
  generator: () => T,
  count: number,
  {
    isEqual = Object.is,
  }: {
    isEqual?: (a: T, b: T) => boolean;
  } = {},
): T[] => {
  const maxRetries = 50 * count;
  const results: T[] = [];
  const isUniqueValue = (items: T[], val: T): boolean =>
    !items.some((item: T) => isEqual(item, val));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-labels
  loop: for (const c of range(0, count)) {
    let didGenerateUniqueValue = false;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const r of range(0, maxRetries)) {
      const value = generator();
      if (isUniqueValue(results, value)) {
        didGenerateUniqueValue = true;
        results.push(value);
        // eslint-disable-next-line no-labels
        continue loop;
      }
    }
    if (!didGenerateUniqueValue) {
      throw new RangeError(
        `Failed to generate a unique value; the provided generator may not be capable of creating a unique value for a count of ${count.toString()}.`,
      );
    }
  }
  return results;
};

export default createUniqueGenerator;
