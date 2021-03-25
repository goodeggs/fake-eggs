import {Chance} from 'chance';

import createAddressGenerator from '.';

describe('address', () => {
  it('generates a random address string', (): void => {
    const chance = new Chance();
    const address = createAddressGenerator(chance);

    const addressValue = address();

    expect(addressValue).not.toBe(null);
    expect(addressValue).toMatch(/^[a-zA-Z0-9 ]*$/);
  });
});
