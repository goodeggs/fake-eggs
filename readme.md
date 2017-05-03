# fake-eggs
Providing you with all sorts of Good Eggs-style fake data!

All exported functions are stateless (meaning you don't have to worry about binding to `this`).

## Examples

```javascript
var fake = require('fake-eggs');

// primitives
fake.boolean(); // => true
fake.string(); // => 'sKvWhsJLnySpbAtxHSPpgCpCzEHV'
fake.number(); // => -32.1
fake.maybe(fake.boolean()); // => boolean, null, or undefined

// utilities
fake.sample(['a','b','c']); // => 'b'
fake.date(); // => Date<Fri Nov 29 2013 15:42:37 GMT-0800 (PST)>
fake.day(); // => '2014-06-27'
fake.tzid(); // => 'America/Los_Angeles'
fake.objectId(); // => '55bcc51317b1afb4bc174ccc'
fake.integerInRange(1, 30); // => 17
fake.digit(); // => 4
fake.uri(); // => 'https://7wr6_.goodeggs.com/k/ok'

// foodhub
fake.foodhub.slug(); // => 'la'

// customer
fake.customer.firstName(); // => 'Kelis'
fake.customer.lastName(); // => 'Bongio'
fake.customer.fullName(); // => 'Rey Maggio'
fake.customer.phoneNumber(); // => '+15557251925'
fake.customer.email(); // 'acutevenerated@gmail.com'

// employee
fake.employee.firstName(); // => 'Joni'
fake.employee.lastName(); // => 'Wu'
fake.employee.phoneNumber(); // => '+15555609968'
fake.employee.email(); // => 'rylee.mayert@goodeggs.com'
fake.employee.fullName();  // => 'Joni Wu'

// producer
fake.producer.name(); // => 'Sand Hill Bakery'
fake.producer.slug(); // => 'pork-r-us'

// product
fake.product.name(); // => 'Large Brown Pastured Eggs'
fake.product.unit(); // => 'oz'
fake.product.count(); // => 45
```

## Contributing

This module is written in ES2015 and converted to node-friendly CommonJS via
[Babel](http://babeljs.io/). Tests are run with [mocha](https://mochajs.org).

If you're going to add a PR, please write a test too. They live in the `test`
directory. To run all tests:

```
npm test
```

To compile the `src` directory to `lib`:

```
npm run build
```
