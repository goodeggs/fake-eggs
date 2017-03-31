import foodhubSlugs from '../data/foodhub_slugs.json'
import randomArrayElement from './random_array_element';

export default function foodhub() {
  return {
    slug: foodhub.slug()
  }
}
foodhub.slug = function() { return randomArrayElement(foodhubSlugs) }
