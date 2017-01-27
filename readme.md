# fake-eggs
Providing you with all sorts of Good Eggs-style fake data!

## Examples

```javascript
var fake = require('fake-eggs')

fake.date() // => Date<Fri Nov 29 2013 15:42:37 GMT-0800 (PST)>
fake.day() // => '2014-06-27'
fake.objectId() // => '55bcc51317b1afb4bc174ccc'

fake.foodhub() // => { slug: 'sfbay' }
fake.foodhub.slug() // => 'la'

fake.customer.firstName() // => 'Kelis'
fake.customer.lastName() // => 'Bongio'
fake.customer() // => { firstName: 'Rolf', lastName: 'Smith', phoneNumber: '+15553120192', email: 'floodwaters@yahoo.com' }

fake.employee.firstName() // => 'Joni'
fake.employee.lastName() // => 'Wu'
fake.employee() // => { firstName: 'Benji', lastName: 'Gustafson', phoneNumber: '+15550392918', email: 'bengi.gustafson@goodeggs.com' }

fake.producer._name() // => 'Sand Hill Bakery'
fake.producer.slug() // => 'pork-r-us'
fake.producer() // => { name: 'Greenwich Sandwiches', slug: 'greenwich-sandwiches' }

fake.product._name() // => 'Large Brown Pastured Eggs'
fake.product.unit() // => 'oz'
fake.product.count() // => 45
fake.product() // => { name: 'Pork Roast', unit: 'lb', count: 21 }
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
