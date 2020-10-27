import {Chance} from 'chance';

import createDateGenerator from '.';

describe('date', () => {
  it('generates a date in the range `-271821-04-20T00:00:00.000Z` to `+275760-09-13T00:00:00.000Z`', (): void => {
    const chance = new Chance();
    const date = createDateGenerator(chance);

    const value = date();

    expect(value.valueOf()).toBeGreaterThanOrEqual(
      new Date('-271821-04-20T00:00:00.000Z').valueOf(),
    );
    expect(value.valueOf()).toBeLessThanOrEqual(new Date('+275760-09-13T00:00:00.000Z').valueOf());
  });

  it('generates a value greater than or equal to `from`', (): void => {
    const chance = new Chance();
    const date = createDateGenerator(chance);
    const from = new Date('2020-10-13T00:00:00.000Z');

    const value = date(from);

    expect(value.valueOf()).toBeGreaterThanOrEqual(from.valueOf());
  });

  it('generates a value less than `to`', (): void => {
    const chance = new Chance();
    const date = createDateGenerator(chance);
    const to = new Date('2020-10-14T00:00:00.000Z');

    const value = date(undefined, to);

    expect(value.valueOf()).toBeLessThan(to.valueOf());
  });

  it('generates a value that is greater than or equal to `from` and less than `to`', (): void => {
    const chance = new Chance();
    const date = createDateGenerator(chance);
    const from = new Date('2020-10-13T00:00:00.000Z');
    const to = new Date('2020-10-14T00:00:00.000Z');

    const value = date(from, to);

    expect(value.valueOf()).toBeGreaterThanOrEqual(from.valueOf());
    expect(value.valueOf()).toBeLessThan(to.valueOf());
  });
});
