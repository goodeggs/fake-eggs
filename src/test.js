// @flow
import {describe, it} from 'mocha';
import {expect} from 'goodeggs-test-helpers/chai';

import fake from '../src'

describe('the default export', function() {
  // TODO: split these into smaller tests
  it('works', function () {
    expect(fake.customer.firstName()).to.be.a('string');
    expect(fake.customer.lastName()).to.be.a('string');
    expect(fake.customer.phoneNumber()).to.be.a('string');
    expect(fake.customer.email()).to.be.a('string');
    expect(fake.employee.firstName()).to.be.a('string');
    expect(fake.employee.lastName()).to.be.a('string');
    expect(fake.employee.phoneNumber()).to.be.a('string');
    expect(fake.employee.email()).to.be.a('string');
    expect(fake.producer.name()).to.be.a('string');
    expect(fake.producer.slug()).to.be.a('string');
    expect(fake.product.name()).to.be.a('string');
    expect(fake.product.unit()).to.be.a('string');
    expect(fake.product.count()).to.be.a('number');
    expect(fake.product.storageType()).to.be.a('string');
    expect(fake.foodhub.slug()).to.be.a('string');
    expect(fake.warehouseLocation.zone()).to.be.a('string');
    expect(fake.warehouseLocation.aisle()).to.be.a('string');
    expect(fake.warehouseLocation.rack()).to.be.a('string');
    expect(fake.warehouseLocation.shelf()).to.be.a('string');
    expect(fake.warehouseLocation.label()).to.be.a('string');
    expect(fake.inventoryLot.label()).to.be.a('string');
    // TODO: better test for this
    fake.maybe(fake.boolean);
    expect(fake.array(0, 2, fake.boolean)).to.be.an.instanceof(Array);
    expect(fake.boolean()).to.be.a('boolean');
    expect(fake.number()).to.be.a('number');
    expect(fake.date()).to.be.an.instanceof(Date);
    expect(fake.day()).to.be.a('string');
    expect(fake.tzid()).to.be.a('string');
    expect(fake.objectId()).to.be.a('string');
    expect(fake.integer()).to.be.a('number');
    expect(fake.sample(['a','b','c'])).to.be.a('string');
    expect(fake.digit()).to.be.a('number');
    expect(fake.string()).to.be.a('string');
    expect(fake.uri()).to.be.a('string');
  });
});
