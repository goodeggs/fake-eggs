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



<small>[[view source]](src/index.js#L33-L33)</small>

  
#### `fake.boolean`

`() => boolean`



<small>[[view source]](src/index.js#L34-L34)</small>

  
#### `fake.customer`

`{|email: (options?: {domain?: string, username?: string}) => string, firstName: () => string, fullName: (firstName?: string, lastName?: string) => string, lastName: () => string, phoneNumber: () => string|}`



<small>[[view source]](src/index.js#L35-L35)</small>

  
#### `fake.date`

`(from?: (Date | string), to?: (Date | string)) => Date`



<small>[[view source]](src/index.js#L36-L36)</small>

  
#### `fake.day`

`(from?: (Date | string), to?: (Date | string)) => string`



<small>[[view source]](src/index.js#L37-L37)</small>

  
#### `fake.digit`

`() => number`



<small>[[view source]](src/index.js#L38-L38)</small>

  
#### `fake.email`

`(options?: {domain?: string, username?: string}) => string`



<small>[[view source]](src/index.js#L39-L39)</small>

  
#### `fake.employee`

`{|email: (options?: {firstName?: string, lastName?: string}) => string, firstName: () => string, fullName: (firstName?: string, lastName?: string) => string, lastName: () => string, phoneNumber: () => string|}`



<small>[[view source]](src/index.js#L40-L40)</small>

  
#### `fake.factory`

`<T: Object>(defaults: DefaultCreatorsFor<T>) => Factory<T>`



<small>[[view source]](src/index.js#L41-L41)</small>

  
#### `fake.firstName`

`() => string`



<small>[[view source]](src/index.js#L42-L42)</small>

  
#### `fake.foodhub`

`{|slug: () => string|}`



<small>[[view source]](src/index.js#L43-L43)</small>

  
#### `fake.fullName`

`(firstName?: string, lastName?: string) => string`



<small>[[view source]](src/index.js#L44-L44)</small>

  
#### `fake.globallyUniqueString`

`(unknown)`



<small>[[view source]](src/index.js#L45-L45)</small>

  
#### `fake.integer`

`(lowerInclusive?: number, upperExclusive?: number) => number`



<small>[[view source]](src/index.js#L46-L46)</small>

  
#### `fake.inventoryLot`

`{|label: () => string|}`



<small>[[view source]](src/index.js#L47-L47)</small>

  
#### `fake.lastName`

`() => string`



<small>[[view source]](src/index.js#L48-L48)</small>

  
#### `fake.maybe`

`<T>(returnValue: () => T) => ?T`



<small>[[view source]](src/index.js#L49-L49)</small>

  
#### `fake.nullable`

`<T>(returnValue: () => T) => (T | null)`



<small>[[view source]](src/index.js#L50-L50)</small>

  
#### `fake.number`

`(lowerInclusive?: number, upperExclusive?: number) => number`



<small>[[view source]](src/index.js#L51-L51)</small>

  
#### `fake.objectId`

`({+counter?: number, +from?: (string | Date), +machineId?: number, +processId?: number, +timestamp?: (string | Date | number), +to?: (string | Date)}) => string`



<small>[[view source]](src/index.js#L52-L52)</small>

  
#### `fake.optional`

`<T>(returnValue: () => T) => (T | void)`



<small>[[view source]](src/index.js#L53-L53)</small>

  
#### `fake.phoneNumber`

`() => string`



<small>[[view source]](src/index.js#L54-L54)</small>

  
#### `fake.producer`

`{|name: () => string, slug: (nameArg?: string) => string|}`



<small>[[view source]](src/index.js#L55-L55)</small>

  
#### `fake.product`

`{|count: () => number, name: () => string, storageType: () => string, unit: () => string|}`



<small>[[view source]](src/index.js#L56-L56)</small>

  
#### `fake.sample`

`<T>(array: T[]) => T`



<small>[[view source]](src/index.js#L57-L57)</small>

  
#### `fake.string`

`(length?: number, charset?: string) => string`



<small>[[view source]](src/index.js#L58-L58)</small>

  
#### `fake.tzid`

`() => string`



<small>[[view source]](src/index.js#L59-L59)</small>

  
#### `fake.uri`

`(domain?: string) => string`



<small>[[view source]](src/index.js#L60-L60)</small>

  
#### `fake.warehouseLocation`

`{|aisle: () => string, label: () => string, rack: () => string, shelf: () => string, zone: () => string|}`



<small>[[view source]](src/index.js#L61-L61)</small>

  
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
