import * as fake from '../src'

it('works', function() {
  fake.customer()
  fake.customer.firstName()
  fake.customer.lastName()
  fake.customer.phoneNumber()
  fake.customer.email()

  fake.employee()
  fake.employee.firstName()
  fake.employee.lastName()
  fake.employee.phoneNumber()
  fake.employee.email()

  fake.producer()
  fake.producer._name()
  fake.producer.slug()

  fake.product()
  fake.product._name()
  fake.product.unit()
  fake.product.count()

  fake.foodhub()
  fake.foodhub.slug()
})
