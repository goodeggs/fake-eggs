import {Chance} from 'chance';
import createDebug from 'debug';

import createAddressGenerator from './generators/address';
import createArrayGenerator from './generators/array';
import createBooleanGenerator from './generators/boolean';
import createCustomerGenerators from './generators/customer';
import createDateGenerator from './generators/date';
import createDayGenerator from './generators/day';
import createDigitGenerator from './generators/digit';
import createEmailGenerator from './generators/email';
import createEmployeeGenerator from './generators/employee';
import createFirstNameGenerator from './generators/first_name';
import createFoodhubGenerators from './generators/foodhub';
import createFullNameGenerator from './generators/full_name';
import createUniqueGenerator from './generators/unique';
import createIntegerGenerator from './generators/integer';
import createLastNameGenerator from './generators/last_name';
import createLocationGenerators from './generators/location';
import createMaybeCombinator from './combinators/maybe';
import createNullableCombinator from './combinators/nullable';
import createNumberGenerator from './generators/number';
import createObjectIdGenerator from './generators/object_id';
import createOptionalCombinator from './combinators/optional';
import createPhoneNumberGenerators from './generators/phone_number';
import createProducerGenerators from './generators/producer';
import createProductGenerators from './generators/product';
import createSampleGenerator from './generators/sample';
import createSentenceGenerator from './generators/sentence';
import createStringGenerator from './generators/string';
import createTzidGenerator from './generators/tzid';
import createUriGenerator from './generators/uri';
import createWordGenerator from './generators/word';
import createZipGenerator from './generators/zip';
import {isNonEmptyString} from './utils';

const parentDebug = createDebug(`@goodeggs/fake-eggs`);

export interface CreateFakeEggsOptions {
  /**
   * seed is an optional value that can be passed to the fake data generator to generate
   * repeatably random data (it will generate the same data for the same sequence of calls).
   * When `process.env.FAKE_DATA_SEED` is set to a non-empty value and `seed` is not explicitly
   * passed, `process.env.FAKE_DATA_SEED` will be used.
   *
   * This can be used, for example, to make it easier to reproduce flaky tests locally:
   *
   * ```
   * // local_modules/fake_eggs/index.ts
   * if (process.env.FAKE_DATA_SEED != null) {
   *   console.log(`Using fake data seed for tests: ${process.env.FAKE_DATA_SEED}`);
   * }
   * export default createFakeEggs({seed: process.env.FAKE_DATA_SEED});
   *
   * // When running tests:
   * FAKE_DATA_SEED="$(date)" yarn run test
   * FAKE_DATA_SEED="${BUILDKITE_BUILD_ID}" yarn run test
   * FAKE_DATA_SEED="${TRAVIS_BUILD_ID}" yarn run test
   * ```
   */
  seed?: string;
}

// Let TS infer this type, since it's pretty verbose to duplicate and provides no value.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createFakeEggs = ({
  seed = Math.floor(Math.random() * 10 ** 13).toString(),
}: CreateFakeEggsOptions = {}) => {
  const debug = parentDebug.extend(seed);
  const chance = new Chance(seed);
  debug(`Initialized fake-eggs`);

  return {
    /**
     * Chance itself
     */
    chance,

    /*
     * Combinators
     */

    maybe: createMaybeCombinator(chance),
    nullable: createNullableCombinator(chance),
    optional: createOptionalCombinator(chance),

    /*
     * Generators
     */

    address: createAddressGenerator(chance),
    array: createArrayGenerator(chance),
    boolean: createBooleanGenerator(chance),
    customer: createCustomerGenerators(chance),
    date: createDateGenerator(chance),
    day: createDayGenerator(chance),
    digit: createDigitGenerator(chance),
    email: createEmailGenerator(chance),
    employee: createEmployeeGenerator(chance),
    firstName: createFirstNameGenerator(chance),
    foodhub: createFoodhubGenerators(chance),
    fullName: createFullNameGenerator(chance),
    integer: createIntegerGenerator(chance),
    lastName: createLastNameGenerator(chance),
    location: createLocationGenerators(chance),
    number: createNumberGenerator(chance),
    objectId: createObjectIdGenerator(chance),
    phoneNumber: createPhoneNumberGenerators(chance),
    producer: createProducerGenerators(chance),
    product: createProductGenerators(chance),
    sample: createSampleGenerator(chance),
    sentence: createSentenceGenerator(chance),
    string: createStringGenerator(chance),
    tzid: createTzidGenerator(chance),
    unique: createUniqueGenerator(chance),
    uri: createUriGenerator(chance),
    word: createWordGenerator(chance),
    zip: createZipGenerator(chance),
  };
};

const getDefaultSeed = (): string | undefined => {
  const env = global?.process?.env;
  if (env != null) {
    if (isNonEmptyString(env.FAKE_DATA_SEED)) {
      return env.FAKE_DATA_SEED;
    } else if (isNonEmptyString(env.TRAVIS_BUILD_ID)) {
      return env.TRAVIS_BUILD_ID;
    } else if (isNonEmptyString(env.BUILDKITE_BUILD_ID)) {
      return env.BUILDKITE_BUILD_ID;
    }
  }
};

export default createFakeEggs({
  seed: getDefaultSeed(),
});
