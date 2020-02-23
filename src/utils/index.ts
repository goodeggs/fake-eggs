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
