// @flow
import {describe, it} from 'mocha';
import {expect} from 'goodeggs-test-helpers';

import fake from '..';
import factory from '.';

describe('factory', function () {
  it('works', function () {
    type Recipe = {|
      +_id: string,
      +name: string,
      +photo: string,
    |};
    const recipeCreator = factory({
      _id: fake.objectId,
      name: fake.string,
      photo: fake.uri,
    });
    const recipe: Recipe = recipeCreator({name: 'Sponge Cake'});
    expect(recipe).to.have.property('_id');
    expect(recipe).to.have.property('name', 'Sponge Cake');
    expect(recipe).to.have.property('photo');
  })
})
