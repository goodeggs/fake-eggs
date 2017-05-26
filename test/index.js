// @flow
import {it} from 'mocha';

import fake from '../src'

it('works', function() {
  fake.customer.firstName();
  fake.customer.lastName();
  fake.customer.phoneNumber();
  fake.customer.email();

  fake.employee.firstName();
  fake.employee.lastName();
  fake.employee.phoneNumber();
  fake.employee.email();

  fake.producer.name();
  fake.producer.slug();

  fake.product.name();
  fake.product.unit();
  fake.product.count();
  fake.product.storageType();

  fake.foodhub.slug();

  fake.maybe(fake.boolean());
  fake.boolean();
  fake.number();
  fake.date();
  fake.day();
  fake.tzid();
  fake.objectId();
  fake.integer();
  fake.sample(['a','b','c']);
  fake.digit();
  fake.string();
  fake.uri();
});
