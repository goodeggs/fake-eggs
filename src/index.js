import _ from 'lodash'

import firstNames from '../data/first_names.json'
import lastNames from '../data/last_names.json'
import usernames from '../data/usernames.json'
import domains from '../data/domains.json'
import producerNames from '../data/producer_names.json'
import productNames from '../data/product_names.json'
import productUnits from '../data/product_units.json'
import foodhubSlugs from '../data/foodhub_slugs.json'

function integerInRange(lower, upper) {
  return Math.floor(Math.random() * (upper + lower)) - lower
}
function randomArrayElement(array) {
  return array[integerInRange(0, array.length)]
}
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\-_]+/g, '') // remove all non-word characters
}
function randomDigit() { return integerInRange(0, 10) }
function firstName() { return randomArrayElement(firstNames) }
function lastName() { return randomArrayElement(lastNames) }
function phoneNumber() { return `+1555${_.times(7, randomDigit).join('')}` }
function email(username, domain) {
  if (!username) username = randomArrayElement(usernames)
  if (!domain) domain = randomArrayElement(domains)
  return `${username}@${domain}`
}

export function customer() {
  return {
    firstName: customer.firstName(),
    lastName: customer.lastName(),
    phoneNumber: customer.phoneNumber(),
    email: customer.email()
  }
}
customer.firstName = firstName
customer.lastName = lastName
customer.phoneNumber = phoneNumber
customer.email = () => email(randomArrayElement(usernames), randomArrayElement(domains))

export function employee() {
  var firstName = employee.firstName()
  var lastName = employee.lastName()
  return {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: employee.phoneNumber(),
    email: employee.email(firstName, lastName)
  }
}
employee.firstName = firstName
employee.lastName = lastName
employee.phoneNumber = phoneNumber
employee.email = function(firstName, lastName) {
  if (!firstName) firstName = employee.firstName()
  if (!lastName) lastName = employee.lastName()
  return email(`${slugify(firstName)}.${slugify(lastName)}`, 'goodeggs.com')
}

export function producer() {
  var name = producer._name()
  return {
    name: name,
    slug: producer.slug(name)
  }
}
producer._name = function() { return randomArrayElement(producerNames) }
producer.slug = function(name) { return slugify(name || producer._name()) }

export function product() {
  return {
    name: product._name(),
    unit: product.unit(),
    count: product.count()
  }
}
product._name = function() { return randomArrayElement(productNames) }
product.unit = function() { return randomArrayElement(productUnits) }
product.count = function() { return integerInRange(1, 100) }

export function foodhub() {
  return {
    slug: foodhub.slug()
  }
}
foodhub.slug = function() { return randomArrayElement(foodhubSlugs) }
