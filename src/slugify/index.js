// @flow

/**
 * Lowercases and removes spaces from a string, so that it can be used as a slug.
 */
function slugify (text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\-_]+/g, '') // remove all non-word characters
}

export default slugify;
