// @flow

import generateString from "../string";

/**
 * Makes a function that will return an internally globally unique string
 * by appending a monotonically-increasing integer.
 *
 * For example:
 *
 * ```js
 * import fake from 'fake-eggs';
 *
 * const uniqueFoo = fake.globallyUniqueString(() => 'foo');
 * uniqueFoo() // => "foo_0"
 * uniqueFoo() // => "foo_1"
 * uniqueFoo() // => "foo_2"
 * ```
 */
function globallyUniqueString<T: *>(
  generator: ?(...args: T) => string
): (...args: T) => string {
  let iterator = 0;
  return (...args) => {
    const generatedValue =
      generator != null ? generator(...args) : generateString();
    return `${generatedValue}_${iterator++}`;
  };
}

export default globallyUniqueString;
