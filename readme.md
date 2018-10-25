# fake-eggs

Providing you with all sorts of Good Eggs-style fake data!

[![Greenkeeper badge](https://badges.greenkeeper.io/goodeggs/fake-eggs.svg)](https://greenkeeper.io/)

All exported functions are stateless (meaning you don't have to worry about binding to `this`).

## Examples

```javascript
import fake from 'fake-eggs';

fake.boolean(); // => true
fake.sample(['a','b','c']); // => 'b
fake.uri(); // => 'https://7wr6_.goodeggs.com/k/ok
fake.employee.email(); // => 'rylee.mayert@goodeggs.com
```

## API

<!-- automatically generated documentation starts here. -->

#### `fake.array`

`<T>(lengthLowerInclusive: number, lengthUpperExclusive: number, generator: () => T) => T[]`


Calls supplied `generator` function to return an array of length `lengthLowerInclusive` and `lengthUpperInclusive`.


<small>[[view source]](src/array/index.js#L9-L11)</small>


#### `fake.boolean`

`() => boolean`


Returns `true` or `false`, chosen at random.


<small>[[view source]](src/boolean/index.js#L7-L9)</small>


#### `fake.customer.firstName`

`() => string`


Returns a randomly-selected first name, e.g. `Carter`.


<small>[[view source]](src/first_name/index.js#L7-L9)</small>


#### `fake.customer.lastName`

`() => string`


Generates a random last name, e.g., `Armstrong`.


<small>[[view source]](src/last_name/index.js#L8-L10)</small>


#### `fake.customer.phoneNumber`

`() => string`


Generates a random phone number, e.g. `+15556797779`.


<small>[[view source]](src/phone_number/index.js#L9-L11)</small>


#### `fake.customer.fullName`

`(firstName?: string, lastName?: string) => string`


Randomly generates a full name, e.g., `Randall Munroe`. `firstName` and `lastName` can optionally be overridden.


<small>[[view source]](src/full_name/index.js#L8-L12)</small>


#### `fake.customer.email`

`(options?: {domain?: string, username?: string}) => string`


Returns a randomly-selected email address string (e.g., `dualityhiss@icicle.net`).
You can override either portion of the email with `username` and `domain` options.


<small>[[view source]](src/email/index.js#L9-L16)</small>


#### `fake.date`

`(from?: (Date | string), to?: (Date | string)) => Date`


Returns a randomly-selected `Date`, optionally between `from` and `to`.


<small>[[view source]](src/date/index.js#L12-L23)</small>


#### `fake.day`

`(from?: (Date | string), to?: (Date | string)) => string`


Returns a randomly-selected day string (`YYYY-MM-DD`), optionally between `from` and `to`.


<small>[[view source]](src/day/index.js#L10-L16)</small>


#### `fake.digit`

`() => number`


Returns a randomly-selected digit (integer between 0 and 9).


<small>[[view source]](src/digit/index.js#L7-L7)</small>


#### `fake.email`

`(options?: {domain?: string, username?: string}) => string`


Returns a randomly-selected email address string (e.g., `dualityhiss@icicle.net`).
You can override either portion of the email with `username` and `domain` options.


<small>[[view source]](src/email/index.js#L9-L16)</small>


#### `fake.employee.firstName`

`() => string`


Returns a randomly-selected first name, e.g. `Carter`.


<small>[[view source]](src/first_name/index.js#L7-L9)</small>


#### `fake.employee.lastName`

`() => string`


Generates a random last name, e.g., `Armstrong`.


<small>[[view source]](src/last_name/index.js#L8-L10)</small>


#### `fake.employee.phoneNumber`

`() => string`


Generates a random phone number, e.g. `+15556797779`.


<small>[[view source]](src/phone_number/index.js#L9-L11)</small>


#### `fake.employee.fullName`

`(firstName?: string, lastName?: string) => string`


Randomly generates a full name, e.g., `Randall Munroe`. `firstName` and `lastName` can optionally be overridden.


<small>[[view source]](src/full_name/index.js#L8-L12)</small>


#### `fake.employee.email`

`(options?: {firstName?: string, lastName?: string}) => string`


Returns a randomly-selected email address at goodeggs.com of the form `randall.munroe@goodeggs.com`.
You can override `firstName` and `lastName` by providing appropriate options.


<small>[[view source]](src/employee/index.js#L22-L32)</small>


#### `fake.factory`

`<T: Object>(defaults: DefaultCreatorsFor<T>) => Factory<T>`


Makes a function that can build up arbitrary objects.
For example:

```js
import fake from 'fake-eggs';

const recipeCreator = fake.factory({
  _id: fake.objectId,
  name: fake.string,
  photo: fake.uri,
});
const recipe = recipeCreator({name: 'Sponge Cake'});
// => {
//      _id: '5153d879dcc2d3e27e689de6',
//      name: 'Sponge Cake',
//      photo: 'http://u6.goodeggs.com/h4mko8c/61n6ut5/c3nr9',
//    }
```

This function really shines if you're leveraging flow types. Here's an example:

```js
import fake from 'fake-eggs';
import type {Factory} from 'fake-eggs/factory';

type Recipe = {|
  +_id: string,
  +name: string,
  +photo: string,
|};

const recipeCreator: Factory<Recipe> = fake.factory({
  _id: fake.objectId,
  name: fake.string,
  photo: fake.uri,
});
const recipe = recipeCreator({name: 'Sponge Cake'});
```

In this case, flow will complain if:
  - You include properties that are not present in the provided type
  - You specify factory functions that don't match the provided type
  - You include overridden properties that are not present in the provided type
  - You include overridden properties that don't match the provided type

Additionally, flow will understand that the resulting object created by the factory
is of the provided type.


<small>[[view source]](src/factory/index.js#L55-L66)</small>


#### `fake.firstName`

`() => string`


Returns a randomly-selected first name, e.g. `Carter`.


<small>[[view source]](src/first_name/index.js#L7-L9)</small>


#### `fake.foodhub.slug`

`() => string`


Returns a randomly-selected foodhub slug, e.g. `sfbay`.


<small>[[view source]](src/foodhub/index.js#L8-L10)</small>


#### `fake.fullName`

`(firstName?: string, lastName?: string) => string`


Randomly generates a full name, e.g., `Randall Munroe`. `firstName` and `lastName` can optionally be overridden.


<small>[[view source]](src/full_name/index.js#L8-L12)</small>


#### `fake.globallyUniqueString`

`(unknown)`


Makes a function that will return an internally globally unique string
by appending a monotonically-increasing integer.

For example:

```js
import fake from 'fake-eggs';

const uniqueFoo = fake.globallyUniqueString(() => 'foo');
uniqueFoo() // => "foo_0"
uniqueFoo() // => "foo_1"
uniqueFoo() // => "foo_2"
```


<small>[[view source]](src/globally_unique_string/index.js#L20-L29)</small>


#### `fake.integer`

`(lowerInclusive?: number, upperExclusive?: number) => number`


Generates a random integer (could be negative!). Optionally between `lowerExclusive` and `upperExclusive`.


<small>[[view source]](src/integer/index.js#L6-L10)</small>


#### `fake.inventoryLot.label`

`() => string`


Generates an inventory lot label, e.g., "F1A4"


<small>[[view source]](src/inventory_lot/index.js#L8-L10)</small>


#### `fake.lastName`

`() => string`


Generates a random last name, e.g., `Armstrong`.


<small>[[view source]](src/last_name/index.js#L8-L10)</small>


#### `fake.maybe`

`<T>(returnValue: () => T) => ?T`


Potentially returns `null`, `undefined`, or the result of the supplied `returnValue` function.

Useful for maybe types in Flow, e.g.:

```
{
  maybeValue: ?boolean,
}
```


<small>[[view source]](src/maybe/index.js#L18-L22)</small>


#### `fake.nullable`

`<T>(returnValue: () => T) => T | null`


Potentially returns `null`, or the result of the supplied `returnValue` function.

Useful for nullable types in Flow, e.g.:

```
{
  nullableValue: boolean | null,
}
```


<small>[[view source]](src/nullable/index.js#L17-L21)</small>


#### `fake.number`

`(lowerInclusive?: number, upperExclusive?: number) => number`


Generates a random `number`, optionally between `lowerInclusive` and `upperExclusive`.


<small>[[view source]](src/number/index.js#L7-L12)</small>


#### `fake.objectId`

`({+counter?: number, +from?: (string | Date), +machineId?: number, +processId?: number, +timestamp?: (string | Date | number), +to?: (string | Date)}) => string`


Generates a random mongodb-friendly objectId string.


<small>[[view source]](src/object_id/index.js#L11-L42)</small>


#### `fake.optional`

`<T>(returnValue: () => T) => (T | void)`



<small>[[view source]](src/optional/index.js#L17-L20)</small>


#### `fake.phoneNumber`

`() => string`


Generates a random phone number, e.g. `+15556797779`.


<small>[[view source]](src/phone_number/index.js#L9-L11)</small>


#### `fake.producer.name`

`() => string`


Generates a random producer name, e.g., `Bahringer`.


<small>[[view source]](src/producer/index.js#L10-L12)</small>


#### `fake.producer.slug`

`(nameArg?: string) => string`


Generates a random producer slug, e.g., `anderson`.
Optionally can override with an explicit name to generate from.


<small>[[view source]](src/producer/index.js#L18-L20)</small>


#### `fake.product.name`

`() => string`


Generates a random product name, e.g. `Hargrand Apricots`.


<small>[[view source]](src/product/index.js#L10-L12)</small>


#### `fake.product.unit`

`() => string`


Generates a random product unit, e.g. `count`.


<small>[[view source]](src/product/index.js#L17-L19)</small>


#### `fake.product.count`

`() => number`


Generates a random product count, e.g., `31`.


<small>[[view source]](src/product/index.js#L31-L33)</small>


#### `fake.product.storageType`

`() => string`


Generates a random storage type, e.g., `chill`.


<small>[[view source]](src/product/index.js#L24-L26)</small>


#### `fake.sample`

`<T>(array: T[]) => T`


Chooses one of the elements of the provided `array`.


<small>[[view source]](src/sample/index.js#L8-L10)</small>


#### `fake.string`

`(length?: number, charset?: string) => string`


Generates a random string, optionally of `length` and using chars from provided `charset`.


<small>[[view source]](src/string/index.js#L11-L16)</small>


#### `fake.tzid`

`() => string`


Generate a random tzid, e.g., `America/Denver`.


<small>[[view source]](src/tzid/index.js#L8-L10)</small>


#### `fake.uri`

`(domain?: string) => string`


Generate a random URI, e.g., `https://adl2j.goodeggs.com/ax/faj23`
@param {*} domain


<small>[[view source]](src/uri/index.js#L13-L27)</small>


#### `fake.warehouseLocation.zone`

`() => string`


Returns a random zone, e.g. `chill`.


<small>[[view source]](src/warehouse_location/index.js#L9-L11)</small>


#### `fake.warehouseLocation.aisle`

`() => string`


Returns a random aisle, e.g., `F`.


<small>[[view source]](src/warehouse_location/index.js#L16-L18)</small>


#### `fake.warehouseLocation.rack`

`() => string`


Returns a random rack, e.g., `12`;


<small>[[view source]](src/warehouse_location/index.js#L23-L25)</small>


#### `fake.warehouseLocation.shelf`

`() => string`


Returns a random shelf, e.g., `3`


<small>[[view source]](src/warehouse_location/index.js#L30-L32)</small>


#### `fake.warehouseLocation.label`

`() => string`


Returns a location label for a warehouse location, e.g., `cF12-3`


<small>[[view source]](src/warehouse_location/index.js#L37-L39)</small>


<!-- automatically generated documentation ends here. -->


## Contributing

This module is written in ES2015 and converted to node-friendly CommonJS via
[Babel](http://babeljs.io/). Tests are run with [mocha](https://mochajs.org).

If you're going to add a PR, please write a test too. They live in the `test`
directory. To run all tests:

```
npm test
```

To compile the `src` directory to `lib` and generate the documentation above:

```
npm run build
```
