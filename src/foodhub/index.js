// @flow

import sample from '../sample';

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
