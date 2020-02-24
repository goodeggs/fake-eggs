import {Chance} from 'chance';

import createUniqueGenerator from '.';
import {range} from '../../utils';

describe('unique', () => {
  const chance = new Chance();
  const unique = createUniqueGenerator(chance);

  it('generates an array of unique values', () => {
    // This could theoretically fail, but we'd have to get extraordinarily unlucky for it to do so.
    const generateInteger0to100 = (): number => Math.floor(Math.random() * 100);
    const values = unique(generateInteger0to100, 100);
    expect(values.sort()).toEqual(Array.from(range(0, 100)).sort());
  });

  it('throws a RangeError when unable to generate unique values', () => {
    // This is just straight-up impossible.
    const generateInteger0to10 = (): number => Math.floor(Math.random() * 10);
    expect(() => unique(generateInteger0to10, 100)).toThrow(RangeError);
  });
});
