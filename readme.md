# fake-eggs
Providing you with all sorts of Good Eggs-style fake data!

All exported functions are stateless (meaning you don't have to worry about binding to `this`).

## Examples

```javascript
var fake = require('fake-eggs');

// UTILITIES
fake.date(); // => Date<Fri Nov 29 2013 15:42:37 GMT-0800 (PST)>
fake.day(); // => '2014-06-27'
fake.tzid(); // => 'America/Los_Angeles'
fake.objectId(); // => '55bcc51317b1afb4bc174ccc'
fake.integerInRange(1, 30); // => 17
fake.randomArrayElement(['a','b','c']); // => 'c'
fake.randomDigit(); // => 4
fake.randomString(/* length */ 10, /* charset */ 'abc'); // => 'acccacaccc'
fake.randomString(); // => 'sKvWhsJLnySpbAtxHSPpgCpCzEHV'
fake.uri(); // => 'https://7wr6_.goodeggs.com/k/ok'
fake.uri('example.com'); // => 'https://example.com/hsmo_/zq/7wov/d3l64'

// FOODHUBS
fake.foodhub.slug(); // => 'la'
fake.foodhub(); // => { slug: 'sfbay' }

// CUSTOMERS
fake.customer.firstName(); // => 'Kelis'
fake.customer.lastName(); // => 'Bongio'
fake.customer.fullName(); // => 'Rey Maggio'
fake.customer.phoneNumber(); // => '+15557251925'
fake.customer.email(); // 'acutevenerated@gmail.com'
fake.customer(); // => { firstName: 'Rolf', lastName: 'Smith', fullName: 'Rolf Smith', phoneNumber: '+15553120192', email: 'floodwaters@yahoo.com' }

// EMPLOYEES
fake.employee.firstName(); // => 'Joni'
fake.employee.lastName(); // => 'Wu'
fake.employee.phoneNumber(); // => '+15555609968'
fake.employee.email(); // => 'rylee.mayert@goodeggs.com'
fake.employee.fullName();  // => 'Joni Wu'
fake.employee(); // => { firstName: 'Benji', lastName: 'Gustafson', fullName: 'Benji Gustafson', phoneNumber: '+15550392918', email: 'bengi.gustafson@goodeggs.com' }

// PRODUCERS
fake.producer._name(); // => 'Sand Hill Bakery'
fake.producer.slug(); // => 'pork-r-us'
fake.producer(); // => { name: 'Greenwich Sandwiches', slug: 'greenwich-sandwiches' }

// PRODUCTS
fake.product._name(); // => 'Large Brown Pastured Eggs'
fake.product.unit(); // => 'oz'
fake.product.count(); // => 45
fake.product(); // => { name: 'Pork Roast', unit: 'lb', count: 21 }
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
