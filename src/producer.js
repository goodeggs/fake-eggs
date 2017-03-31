import producerNames from '../data/producer_names.json'
import randomArrayElement from './random_array_element';
import slugify from './slugify';

export default function producer() {
  var name = producer._name()
  return {
    name: name,
    slug: producer.slug(name)
  }
}
producer._name = function() { return randomArrayElement(producerNames) }
producer.slug = function(name) { return slugify(name || producer._name()) }

