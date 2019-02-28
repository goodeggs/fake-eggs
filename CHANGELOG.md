# v4.6.0

* Add TypeScript type definitions

# v4.3.1

* Fix missing `optional` export

# v4.3.0

* Add `optional()`, which accepts a function with return value `T` and returns `T | void`.

# v4.0.0

* *BREAKING:* `maybe()` now takes a function that returns a value, instead of a value.

# v3.2.0

* `array()` generates an array of variable length.

# v3.1.0

* `inventoryLot.label()` generates an string like `4B2A`.
* `warehouseLocation.label()` generates a string like `cD12-1`.
* `warehouseLocation.zone()` generates a string like `frozen`.
* `warehouseLocation.aisle()`, `warehouseLocation.rack()`, and `warehouseLocation.shelf()` generate short strings.
* `product.storageType()` generates a string like `flowers`.

# v3.0.1

* fix a bug in day calculation

# v3.0.0

* *BREAKING:* `integerInRange()` renamed to `integer()`.

# v2.0.0

* *BREAKING:* remove `foodhub()`, `customer()`, `employee()`, `producer()`, and `product()` functions in favor of embedded functions that return simple values.
* *BREAKING:* `randomArrayElement()` renamed to `sample()`.
* *BREAKING:* `randomString()` renamed to `string()`.
* *BREAKING:* `randomDigit()` renamed to `digit()`.
* *BREAKING:* `producer._name()` renamed to `producer.name()`.
* *BREAKING:* `product._name()` renamed to `product.name()`.
* *BREAKING:* Now exporting default object. `import` pattern may change.
* `maybe()` generates `undefined`, `null`, or the passed-in value.
* `number()` generates a random number.
* `boolean()` generates a boolean value.
