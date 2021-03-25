import {Chance} from 'chance';

import createDayGenerator, {DEFAULT_FROM, DEFAULT_TO} from '.';

// Neither jest nor jest-extended has any expressive assertions for comparing *strings*. 🤷
const greaterThanOrEqualTo = (max: string) => (value: string): boolean => value >= max;
const lessThan = (min: string) => (value: string): boolean => value < min;
const lessThanOrEqualTo = (min: string) => (value: string): boolean => value <= min;

describe('day', () => {
  it('throws an error given a `from` string with format other than YYYY-MM-DD', (): void => {
    const chance = new Chance();
    const date = createDayGenerator(chance);
    const from = '202020-10-13';

    expect(() => date(from)).toThrow('`from` must be a Date or a YYYY-MM-DD string');
  });

  it('throws an error given a `to` string with format other than YYYY-MM-DD', (): void => {
    const chance = new Chance();
    const date = createDayGenerator(chance);
    const to = '202020-10-13';

    expect(() => date(undefined, to)).toThrow('`to` must be a Date or a YYYY-MM-DD string');
  });

  it(`generates a day in the range "${DEFAULT_FROM}" to "${DEFAULT_TO}" given no arguments`, (): void => {
    const chance = new Chance();
    const day = createDayGenerator(chance);
    const value = day();

    expect(value).toSatisfy(greaterThanOrEqualTo(DEFAULT_FROM));
    expect(value).toSatisfy(lessThan(DEFAULT_TO));
  });

  it('generates a day greater than or equal the given `from` date string', (): void => {
    const chance = new Chance();
    const date = createDayGenerator(chance);
    const from = '2020-10-13';
    const value = date(from);

    expect(value).toSatisfy(greaterThanOrEqualTo(from));
  });

  it('generates a day greater than or equal to the day in the given `from` Date', (): void => {
    const chance = new Chance();
    const date = createDayGenerator(chance);
    const from = new Date('2020-10-13T12:00:00.000Z');
    const value = date(from);

    expect(value).toSatisfy(greaterThanOrEqualTo('2020-10-13'));
  });

  it('generates a day less than given `to` date string', (): void => {
    const chance = new Chance();
    const date = createDayGenerator(chance);
    const to = '2020-10-13';
    const value = date(undefined, to);

    expect(value).toSatisfy(lessThan(to));
  });

  it('generates a day less than or equal to the day in the given `to` Date', (): void => {
    const chance = new Chance();
    const date = createDayGenerator(chance);
    const to = new Date('2020-10-13T12:00:00.000Z');
    const value = date(undefined, to);

    expect(value).toSatisfy(lessThanOrEqualTo('2020-10-13'));
  });

  it('generates a value that is greater than or equal to given `from` and less than given `to`', (): void => {
    const chance = new Chance();
    const date = createDayGenerator(chance);
    const from = '2020-10-13';
    const to = '2020-10-18';
    const value = date(from, to);

    expect(value).toSatisfy(greaterThanOrEqualTo(from));
    expect(value).toSatisfy(lessThan(to));
  });
});
