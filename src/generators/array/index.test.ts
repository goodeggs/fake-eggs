import {Chance} from 'chance';

import createArray from '.';

describe('array', () => {
  const array = createArray(new Chance());

  it('works', () => {
    array(0, 2, () => 'foo');
  });
});
