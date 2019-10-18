// @flow
import {describe, it} from 'mocha';
import {expect} from 'goodeggs-test-helpers';

import maybe from '.';

describe('maybe', function () {
 it('returns `null`, `undefined`, or result of calling given `generator` function', function () {
   expect(maybe(() => 'foo')).to.be.oneOf([null, undefined, 'foo']);
 });

 it('returns `null` or `undefined` if no `generator` function given', function () {
   expect(maybe()).to.be.oneOf([null, undefined]);
 });
});
