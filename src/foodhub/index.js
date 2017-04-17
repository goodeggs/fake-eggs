// @flow

import randomArrayElement from '../random_array_element';

export default function foodhub(): {
  slug: string,
} {
  return {
    slug: foodhub.slug()
  }
}

foodhub.slug = function ():string {
  return randomArrayElement(foodhubSlugs)
}

const foodhubSlugs = [
  "sfbay",
  "la",
  "nola",
  "nyc",
  "tomorrowland"
];
