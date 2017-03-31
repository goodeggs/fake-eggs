import randomArrayElement from '../random_array_element';

export default function foodhub() {
  return {
    slug: foodhub.slug()
  }
}
module.exports = foodhub;

foodhub.slug = function() { return randomArrayElement(foodhubSlugs) }

const foodhubSlugs = [
  "sfbay",
  "la",
  "nola",
  "nyc",
  "tomorrowland"
];
