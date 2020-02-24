/**
 * Lowercases and removes spaces from a string, so that it can be used as a slug.
 */
export const slugify = (text: string): string => {
  return text.toLowerCase().replace(/[^\w\-_]+/g, ''); // remove all non-word characters
};

declare const nes: unique symbol;
export type NonEmptyString = string & {[nes]: string};

/**
 * isNonEmptyString is a predicate function that checks if a value is both a string and not the
 * empty string ''.
 */
export const isNonEmptyString = (value: unknown): value is NonEmptyString => {
  return typeof value === 'string' && value !== '';
};

/**
 * range creates an iterator that yields values of range start (inclusive) to stop (exclusive).
 */
export const range = function*(start: number, stop: number): Generator<number, void> {
  for (let i = start; i < stop; i += 1) {
    yield i;
  }
};
