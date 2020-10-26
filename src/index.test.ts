import fake from '.';

describe('the default export', function () {
  // TODO: split these into smaller tests
  it('works', function () {
    expect(fake.customer.firstName()).toEqual(expect.any(String));
    expect(fake.customer.lastName()).toEqual(expect.any(String));
    expect(fake.customer.phoneNumber()).toEqual(expect.any(String));
    expect(fake.customer.email()).toEqual(expect.any(String));
    expect(fake.employee.firstName()).toEqual(expect.any(String));
    expect(fake.employee.lastName()).toEqual(expect.any(String));
    expect(fake.employee.phoneNumber()).toEqual(expect.any(String));
    expect(fake.employee.email()).toEqual(expect.any(String));
    expect(fake.producer.name()).toEqual(expect.any(String));
    expect(fake.producer.slug()).toEqual(expect.any(String));
    expect(fake.product.name()).toEqual(expect.any(String));
    expect(fake.product.unit()).toEqual(expect.any(String));
    expect(fake.product.count()).toEqual(expect.any(Number));
    expect(fake.product.storageType()).toEqual(expect.any(String));
    expect(fake.foodhub.slug()).toEqual(expect.any(String));
    expect([undefined, null, true, false]).toContain(fake.maybe(fake.boolean));
    expect([null, true, false]).toContain(fake.nullable(fake.boolean));
    expect(fake.array(0, 2, fake.boolean)).toBeInstanceOf(Array);
    expect(fake.boolean()).toEqual(expect.any(Boolean));
    expect(fake.number()).toEqual(expect.any(Number));
    expect(fake.day()).toEqual(expect.any(String));
    expect(fake.tzid()).toEqual(expect.any(String));
    const values = ['a', 'b', 'c'];
    expect(values).toContain(fake.sample(values));
    expect(fake.digit()).toEqual(expect.any(Number));
    expect(fake.string()).toEqual(expect.any(String));
    expect(fake.uri()).toEqual(expect.any(String));
    expect(fake.zip()).toEqual(expect.any(String));
  });
});
