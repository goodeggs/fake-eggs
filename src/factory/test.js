// @flow
import {describe, it} from 'mocha';
import {expect} from 'goodeggs-test-helpers';

import fake from '..';
import factory from '.';
import type {Factory} from '.';

type Recipe = {
  +_id: string,
  +name: string,
  +photo: string,
};

describe('factory', function () {
  it('generates objects according to passed-in functions', function () {
    const recipeCreator: Factory<Recipe> = factory({
      _id: fake.objectId,
      name: fake.string,
      photo: fake.uri,
    });

    const recipe: Recipe = recipeCreator({name: 'Sponge Cake'});
    expect(recipe).to.have.property('_id');
    expect(recipe).to.have.property('name');
    expect(recipe).to.have.property('photo');
  });

  it('overrides objects with passed-in values', function () {
    const recipeCreator: Factory<Recipe> = factory({
      _id: fake.objectId,
      name: fake.string,
      photo: fake.uri,
    });

    const recipe: Recipe = recipeCreator({name: 'Sponge Cake'});
    expect(recipe).to.have.property('_id');
    expect(recipe).to.have.property('name', 'Sponge Cake');
    expect(recipe).to.have.property('photo');
  });

  it('allows additional values in the resulting object', function () {
    const recipeCreator: Factory<Recipe> = factory({
      herp: fake.string,
      _id: fake.objectId,
      name: fake.string,
      photo: fake.uri,
    });

    const recipe: Recipe = recipeCreator({name: 'Sponge Cake'});
    expect(recipe).to.have.property('herp');
    expect(recipe).to.have.property('_id');
    expect(recipe).to.have.property('name', 'Sponge Cake');
    expect(recipe).to.have.property('photo');
  });

  it('throws a type error (during flow compilation) when factory is incomplete', function () {
    // $ExpectError
    const badFactory: Factory<Recipe> = factory({
      photo: fake.uri,
    });
  });

  it('throws a type error (during flow compilation) when output type does not match factory type', function () {
    type WeirdRecipe = {|
      +_id: string,
      +weirdName: string,
      +weirdPhoto: string,
    |};

    const recipeCreator: Factory<Recipe> = factory({
      _id: fake.objectId,
      name: fake.string,
      photo: fake.uri,
    });

    // $ExpectError
    const weirdRecipe: WeirdRecipe = recipeCreator({});
  });

  it.skip('throws a type error (during flow compilation) when there are extra attribute creators that don\'t match exact factory type', function () {
    // $ShouldExpectErrorButActuallyDoesn'tRightNow TODO TODO
    const recipeCreator: Factory<$Exact<Recipe>> = factory({
      whatIsThisPropertyDoingHere: fake.string,
      _id: fake.objectId,
      name: fake.string,
      photo: fake.uri,
    });
  });

  it('throws a type error (during flow compilation) when overrides are passed in that don\'t match exact factory type', function () {
    const recipeCreator: Factory<$Exact<Recipe>> = factory({
      _id: fake.objectId,
      name: fake.string,
      photo: fake.uri,
    });

    // $ExpectError
    const weirdRecipe: Recipe = recipeCreator({
      whatIsThisPropertyDoingHere: 'noIdea',
    });
  });
})
