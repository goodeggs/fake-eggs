import productNames from '../data/product_names.json'
import productUnits from '../data/product_units.json'
import randomArrayElement from './random_array_element';
import integerInRange from './integer_in_range';

export default function product() {
  return {
    name: product._name(),
    unit: product.unit(),
    count: product.count()
  }
}
product._name = function() { return randomArrayElement(productNames) }
product.unit = function() { return randomArrayElement(productUnits) }
product.count = function() { return integerInRange(1, 100) }

