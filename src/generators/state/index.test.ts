import {Chance} from 'chance';

import createStateGenerator from '.';

describe('state', () => {
  it('generates a random state string', (): void => {
    const chance = new Chance();
    const state = createStateGenerator(chance);

    const stateValue = state();

    expect(stateValue).not.toBe(null);
    expect(stateValue).toMatch(/^[A-Z][A-Z]$/);
  });
});
