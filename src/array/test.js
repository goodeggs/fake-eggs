// @flow
import {describe, it} from 'mocha';

import array from '.';

describe('array', function () {
  it('works', function () {
    array(0, 2, () => 'foo');
  })
})
