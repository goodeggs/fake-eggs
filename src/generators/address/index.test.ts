import {Chance} from 'chance';

import createAddressGenerator from '.';

describe('address', () => {
  it('generates a random address string', (): void => {
    const chance = new Chance();
    const address = createAddressGenerator(chance);

    const addresValue = address();

    expect(addresValue).not.toBe(null);
    expect(addresValue).toMatch(/^[a-zA-Z0-9 ]*$/);
  });
});
