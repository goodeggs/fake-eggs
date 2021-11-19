# fake-eggs

Providing you with all sorts of Good Eggs-style fake data!

All exported functions are stateless (meaning you don't have to worry about binding to `this`).

## Purpose and Scope

Use `fake-eggs` to generate random and realistic "Good Eggs"-style data. This module can be used for test data, local development, and beyond!

Note: when generating json schemas or mongoose schemas [Unionized](https://github.com/goodeggs/unionized) should be used as `fake-eggs` does not support factory-style composition for test data objects.

If `fake-eggs` doesn't support the random data you're trying to generate consider opening an issue to track it - or open a PR to contribute!

## Examples

```javascript
import fake from 'fake-eggs';

fake.boolean(); // => true
fake.sample(['a', 'b', 'c']); // => 'b
fake.uri(); // => 'https://7wr6_.goodeggs.com/k/ok
fake.employee.email(); // => 'rylee.mayert@goodeggs.com
```

## API

<!-- Up until https://github.com/goodeggs/fake-eggs/pull/39, these API docs were generated
automatically. Please update this manually when making changes, until we can add some entation
auto-generation back in. -->

#### `fake.address`

`() => string`

Generates a random street address string (e.g., `5447 Bazpe Lane`).
Recommended to use its `fake.location.address` counterpart.

#### `fake.array`

`<T>(lengthLowerInclusive: number, lengthUpperExclusive: number, generator: () => T) => T[]`

Calls supplied `generator` function to return an array of length `lengthLowerInclusive` and `lengthUpperInclusive`.

#### `fake.boolean`

`() => boolean`

Returns `true` or `false`, chosen at random.


#### `fake.chance`

Exposes the underlying [Chance.js](https://chancejs.com/) client.

#### `fake.customer.firstName`

`() => string`

Returns a randomly-selected first name, e.g. `Carter`.

#### `fake.customer.lastName`

`() => string`

Generates a random last name, e.g., `Armstrong`.

#### `fake.customer.phoneNumber`

`() => string`

Generates a random phone number, e.g. `+15556797779`.

#### `fake.customer.fullName`

`(firstName?: string, lastName?: string) => string`

Randomly generates a full name, e.g., `Randall Munroe`. `firstName` and `lastName` can optionally be overridden.

#### `fake.customer.email`

`(options?: {domain?: string, username?: string}) => string`

Returns a randomly-selected email address string (e.g., `dualityhiss@icicle.net`).
You can override either portion of the email with `username` and `domain` options.

#### `fake.date`

`(from?: (Date | string), to?: (Date | string)) => Date`

Returns a randomly-selected `Date`, optionally between `from` and `to`.

#### `fake.day`

`(from?: (Date | string), to?: (Date | string)) => string`

Returns a randomly-selected day string (`YYYY-MM-DD`), optionally between `from` and `to`.

#### `fake.digit`

`() => number`

Returns a randomly-selected digit (integer between 0 and 9).

#### `fake.email`

`(options?: {domain?: string, username?: string}) => string`

Returns a randomly-selected email address string (e.g., `dualityhiss@icicle.net`).
You can override either portion of the email with `username` and `domain` options.

#### `fake.employee.firstName`

`() => string`

Returns a randomly-selected first name, e.g. `Carter`.

#### `fake.employee.lastName`

`() => string`

Generates a random last name, e.g., `Armstrong`.

#### `fake.employee.phoneNumber`

`() => string`

Generates a random phone number, e.g. `+15556797779`.

#### `fake.employee.fullName`

`(firstName?: string, lastName?: string) => string`

Randomly generates a full name, e.g., `Randall Munroe`. `firstName` and `lastName` can optionally be overridden.

#### `fake.employee.email`

`(options?: {firstName?: string, lastName?: string}) => string`

Returns a randomly-selected email address at goodeggs.com of the form `randall.munroe@goodeggs.com`.
You can override `firstName` and `lastName` by providing appropriate options.

#### `fake.firstName`

`() => string`

Returns a randomly-selected first name, e.g. `Carter`.

#### `fake.foodhub.slug`

`() => string`

Returns a randomly-selected foodhub slug, e.g. `sfbay`.

#### `fake.fullName`

`(firstName?: string, lastName?: string) => string`

Randomly generates a full name, e.g., `Randall Munroe`. `firstName` and `lastName` can optionally be overridden.

#### `fake.integer`

`(lowerInclusive?: number, upperExclusive?: number) => number`

Generates a random integer (could be negative!). Optionally between `lowerExclusive` and `upperExclusive`.

#### `fake.lastName`

`() => string`

Generates a random last name, e.g., `Armstrong`.

#### `fake.location.address`

`() => string`

Generates a random street address string (e.g., `5447 Bazpe Lane`).

#### `fake.location.state`

`() => string`

Generates a random two letter state code, e.g., `CA`.

#### `fake.location.zip`

Generate a random zip code (e.g. 55416) with the option of specifying a ZIP+4 format (e.g. 12201-7050)

`(options?: {plusfour?: boolean}) => string`

#### `fake.maybe`

`<T>(returnValue: () => T) => ?T`

Potentially returns `null`, `undefined`, or the result of the supplied `returnValue` function.

Useful for maybe types in Flow, e.g.:

```
{
  maybeValue: ?boolean,
}
```

#### `fake.nullable`

`<T>(returnValue: () => T) => (T | null)`

#### `fake.number`

`(lowerInclusive?: number, upperExclusive?: number, fixed?: number) => number`

Generates a random `number`, optionally between `lowerInclusive` and `upperExclusive` with a `fixed` number of digits after the decimal.

#### `fake.objectId`

`({+counter?: number, +from?: (string | Date), +machineId?: number, +processId?: number, +timestamp?: (string | Date | number), +to?: (string | Date)}) => string`

Generates a random mongodb-friendly objectId string.

#### `fake.optional`

`<T>(returnValue: () => T) => (T | void)`

#### `fake.phoneNumber`

`() => string`

Generates a random phone number, e.g. `+15556797779`.

#### `fake.producer.name`

`() => string`

Generates a random producer name, e.g., `Bahringer`.

#### `fake.producer.slug`

`(nameArg?: string) => string`

Generates a random producer slug, e.g., `anderson`.
Optionally can override with an explicit name to generate from.

#### `fake.product.name`

`() => string`

Generates a random product name, e.g. `Hargrand Apricots`.

#### `fake.product.unit`

`() => string`

Generates a random product unit, e.g. `count`.

#### `fake.product.count`

`() => number`

Generates a random product count, e.g., `31`.

#### `fake.product.storageType`

`() => string`

Generates a random storage type, e.g., `chill`.

#### `fake.sample`

`<T>(array: T[]) => T`

Chooses one of the elements of the provided `array`. The given array cannot be empty.

#### `fake.sentence`

`() => string`

Generates a random sentence beginning with a capitalized letter and ending with a period.

#### `fake.string`

`(length?: number, charset?: string) => string`

Generates a random string, optionally of `length` and using chars from provided `charset`.

#### `fake.tzid`

`(tzids?: string[]) => string`

Generate a random tzid, e.g., `America/Denver`.

Accepts an optional array of tzids to sample.

#### `fake.unique`

```js
(
  generator: (...args: A) => T,
  {
    isEqual = Object.is,
  }: {
    isEqual?: (a: T, b: T) => boolean;
  } = {},
): ((...args: A) => T)
```

Accepts a generator function and a number of items to generate and returns an array of unique
values. It throws a `RangeError` when it is unable to generate an array of unique values.

By default it compares each new generated value against all other generated values using a
`sameValueZero` (`Object.is`) comparsion. You can customize this behavior by passing your own
comparator via `options.isEqual`.

For example:

```js
import fake from 'fake-eggs';

const uniqueFoo = fake.globallyUniqueString(() => 'foo');
uniqueFoo(); // => "foo_0"
uniqueFoo(); // => "foo_1"
uniqueFoo(); // => "foo_2"

// This could theoretically fail, but we'd have to get extraordinarily unlucky for it to do so.
const generateInteger0to100 = (): number => Math.floor(Math.random() * 100);
const generateUniqueInteger0to100 = fake.unique(generateInteger0to100);
const values = [1, 2, 3, 4, 5].map(() => generateUniqueInteger0to100());
```

#### `fake.uri`

`(domain?: string) => string`

Generate a random URI, e.g., `https://adl2j.goodeggs.com/ax/faj23`
@param {\*} domain

#### `fake.word`

`(length?: number, charset?: string) => string`

#### `fake.zip`

Generate a random zip code (e.g. 55416) with the option of specifying a ZIP+4 format (e.g. 12201-7050).
Recommended to use its `fake.location.zip` counterpart.

`(options?: {plusfour?: boolean}) => string`

## Chance.js methods

`fake-eggs` uses [chance.js](https://chancejs.com/) behind the scenes. The chance.js object is exposed using `fake.chance`, if you wish to use any of its functions.

i.e.
```
fake.chance.address()
fake.chance.state()
```

## Contributing

To compile the project:

```sh
yarn run build
```

To run tests:

```
yarn run test
```

## Releasing

To release a new version of this module, use yarn to bump the version
in `package.json` and create a git tag, then push. This will automatically
get published to the NPM registry via CI.

```sh
yarn version --new-version=<major|minor|patch|premajor|preminor|prepatch>
git push --follow-tags
```
