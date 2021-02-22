import {Chance} from 'chance';

import createNumberGenerator from '.';

describe('createNumberGenerator', function () {
  it('rejects when `fixed` provided is greater than currently set MAX_PRECISION', function () {
    const chance = new Chance();
    const number = createNumberGenerator(chance);

    expect(() => number(0, 10000, 7)).toThrowError(
      '"fixed" must be less than or equal to 6 or null',
    );
  });

  it('generates a random number', function () {
    const chance = new Chance();
    const number = createNumberGenerator(chance);

    expect(number()).toEqual(expect.any(Number));
  });
});
