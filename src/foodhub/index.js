// @flow

import sample from '../sample';

/**
 * Returns a randomly-selected foodhub slug, e.g. `sfbay`.
*/
function slug (): string {
  return sample(foodhubSlugs);
}

export default {slug}

const foodhubSlugs = [
  "sfbay",
  "la",
  "nola",
  "nyc",
  "tomorrowland"
];
