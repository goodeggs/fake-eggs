import {Chance} from 'chance';

import createObjectIdGenerator from '.';

const MONGODB_ID_REGEX = /^[a-f0-9]{24}$/;

describe('objectId', () => {
  it('generates a random valid MongoDB objectid', (): void => {
    const chance = new Chance();
    const objectId = createObjectIdGenerator(chance);

    const value = objectId();

    expect(value).toMatch(MONGODB_ID_REGEX);
  });

  it('throws if a `from` earlier than the Unix epoch is given', (): void => {
    const chance = new Chance();
    const objectId = createObjectIdGenerator(chance);

    expect(() => objectId({from: new Date('1969-10-31T00:00:00.000Z')})).toThrow(
      '`from` cannot be earlier than Unix epoch (1970-01-01 00:00:00.000)',
    );
  });

  it('throws if a `to` earlier than the Unix epoch is given', (): void => {
    const chance = new Chance();
    const objectId = createObjectIdGenerator(chance);

    expect(() =>
      objectId({
        to: new Date('1969-10-31T00:00:00.000Z'),
      }),
    ).toThrow('`to` cannot be earlier than Unix epoch (1970-01-01 00:00:00.000)');
  });
});
