# UNRELEASED

# 6.0.0

## BREAKING

No truly breaking changes; should have been a patch.

## POSSIBLY BREAKING

- `slugify()` no longer preserves hyphens and dashes; consequently,
  `producer.slug()` and `product.slug()` no longer ever includes hyphens or
  dashes

# 5.0.0

## BREAKING

- remove `globallyUniqueString` (see `fake.unique` as a substitute)
- remove `factory`
- remove `inventoryLot`
- remove `warehouseLocation`

## POSSIBLY BREAKING

- fix: `fake.sample` throws when passed array of length `0` to fix possible type mismatch
- fix: `fake.date` validates arguments (`from`/`to`)
- fix: `fake.array` validates arguments (throws if upper exclusive bound is less than or equal to inclusive lower bound)

## Features

- feat: add `fake.unique`, which generates a function returning unique values given a generator
  function (or throws an error if it's unable to)
- feat: `fake.tzid` accepts optional list of TZID strings
- feat: use Chance.js to generate all fake data (now reproducible with a seed)

## Internal

- chore: convert project from Flow to TypeScript
- chore: replace test runner (Mocha) with Jest
- chore: use `@goodeggs/toolkit` to lint project
- chore: automatically publish versions from CI
- chore: upgrade all dependencies

# 4.7.0

* Add `word` and `sentence`

# 4.6.1

* Upgrade lodash to ^4.17.11 (fixes a critical security vulnerability discovered in <4.17.11).

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
