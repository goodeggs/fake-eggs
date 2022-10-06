import {Chance} from 'chance';

import createIntegerGenerator from '.';

describe('integer', () => {
  it('generates a value in the range -2147483648 to 2147483647', (): void => {
    const chance = new Chance();
    const integer = createIntegerGenerator(chance);

    const value = integer();

    expect(value).toBeGreaterThanOrEqual(-2147483648);
    expect(value).toBeLessThan(2147483647);
  });

  it('generates a value greater than or equal to `lowerInclusive`', (): void => {
    const chance = new Chance();
    const integer = createIntegerGenerator(chance);

    const value = integer(1000);

    expect(value).toBeGreaterThanOrEqual(1000);
  });

  it('generates a value less than `upperExclusive`', (): void => {
    const chance = new Chance();
    const integer = createIntegerGenerator(chance);

    const value = integer(1000, 10000);

    expect(value).toBeLessThan(10000);
  });

  it('accepts 0 as `upperExclusive`', (): void => {
    const chance = new Chance();
    const integer = createIntegerGenerator(chance);

    const value = integer(-10, 0);

    expect(value).toBeGreaterThanOrEqual(-10);
    expect(value).toBeLessThan(0);
  });

  it('throws when `lowerInclusive` and `upperExclusive` are the same value', (): void => {
    const chance = new Chance();
    const integer = createIntegerGenerator(chance);

    expect(() => integer(0, 0)).toThrow('Chance: Min cannot be greater than Max.');
  });

  it('throws when `lowerInclusive` is greater than `upperExclusive`', (): void => {
    const chance = new Chance();
    const integer = createIntegerGenerator(chance);

    expect(() => integer(10, 0)).toThrow('Chance: Min cannot be greater than Max.');
  });
});
