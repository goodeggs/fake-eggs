import {Chance} from 'chance';

import createStringGenerator from '.';

describe('string', () => {
  const chance = new Chance();
  const string = createStringGenerator(chance);

  it('generates a random string', () => {
    expect(string()).toEqual(expect.any(String));
  });
});
