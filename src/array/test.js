// @flow
import {describe, it} from 'mocha';
import {expect} from 'goodeggs-test-helpers';

import array from '.';
import integer from '../integer';

describe('array', function () {
 it('returns array of results of calling supplied `generator` function between `lengthLowerInclusive` and `lengthUpperExclusive` times', function () {
   const lengthLowerInclusive = integer(0);
   const lengthUpperExclusive = integer(lengthLowerInclusive);
   const results = array(lengthLowerInclusive, lengthUpperExclusive, () => 'foo');
   expect(results).to.have.length.of.at.least(lengthLowerInclusive);
   expect(results).to.have.length.below(lengthUpperExclusive);
   for (const result of results) {
     // TODO(serhalp) more sophisticated test involving a stub to verify dynamic return values
     expect(result).to.equal('foo');
   }
  })
})
