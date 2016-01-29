# fake-eggs - create all sorts of Good Eggs style fake data!

## Examples

```javascript
var fakeEggs = require('fake-eggs')

fakeEggs.foodhub() // => { slug: 'sfbay' }
fakeEggs.foodhub.slug() // => 'la'

fakeEggs.customer.firstName() // => 'Kelis'
fakeEggs.customer.lastName() // => 'Bongio'
fakeEggs.customer() // => { firstName: 'Rolf', lastName: 'Smith', phoneNumber: '+15553120192', email: 'floodwaters@yahoo.com' }

fakeEggs.employee.firstName() // => 'Joni'
fakeEggs.employee.lastName() // => 'Wu'
fakeEggs.employee() // => { firstName: 'Benji', lastName: 'Gustafson', phoneNumber: '+15550392918', email: 'bengi.gustafson@goodeggs.com' }

fakeEggs.producer._name() // => 'Sand Hill Bakery'
fakeEggs.producer.slug() // => 'pork-r-us'
fakeEggs.producer() // => { name: 'Greenwich Sandwiches', slug: 'greenwich-sandwiches' }

fakeEggs.product._name() // => 'Large Brown Pastured Eggs'
fakeEggs.product.unit() // => 'oz'
fakeEggs.product.count() // => 45
fakeEggs.product() // => { name: 'Pork Roast', unit: 'lb', count: 21 }
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
