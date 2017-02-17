import _ from 'lodash'

import firstNames from '../data/first_names.json'
import lastNames from '../data/last_names.json'
import usernames from '../data/usernames.json'
import domains from '../data/domains.json'
import producerNames from '../data/producer_names.json'
import productNames from '../data/product_names.json'
import productUnits from '../data/product_units.json'
import foodhubSlugs from '../data/foodhub_slugs.json'
import tzids from '../data/tzids.json'

export function randomString (length, charset) {
  if (_.isNil(length)) length = integerInRange(1, 40);
  if (_.isNil(charset)) charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  const chars = charset.split('');
  return _.times(length, () => randomArrayElement(chars)).join('');
}
export function integerInRange(lower, upper) {
  const range = upper - lower;
  const rand = Math.floor(Math.random() * range);
  return lower + rand;
}
export function randomArrayElement(array) {
  return array[integerInRange(0, array.length)]
}
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\-_]+/g, '') // remove all non-word characters
}
export function randomDigit() { return integerInRange(0, 10) }
export function uri(domain = 'goodeggs.com') {
  const uriCharset = 'abcdefghijklmnopqrstuvwxyz_1234567890';
  return [
    randomArrayElement(['http', 'https']),
    '://',
    randomArrayElement([
      `${randomString(integerInRange(1, 7), uriCharset)}.`,
      '']),
    domain,
    '/',
    _.times(integerInRange(1,5), () =>
      randomString(integerInRange(1, 8), uriCharset)
    ).join('/')
  ].join('');
}


export function firstName() { return randomArrayElement(firstNames) }
export function lastName() { return randomArrayElement(lastNames) }
export function phoneNumber() { return `+1555${_.times(7, randomDigit).join('')}` }
export function email(username, domain) {
  if (!username) username = randomArrayElement(usernames)
  if (!domain) domain = randomArrayElement(domains)
  return `${username}@${domain}`
}
export function fullName(_firstName, _lastName) {
  if (!_firstName) _firstName = firstName();
  if (!_lastName) _lastName = lastName();
  return `${_firstName} ${_lastName}`;
}

export function customer() {
  const _firstName = customer.firstName();
  const _lastName = customer.lastName();
  
  return {
    firstName: _firstName,
    lastName: _lastName,
    fullName: customer.fullName(_firstName, _lastName),
    phoneNumber: customer.phoneNumber(),
    email: customer.email(),
  }
}
customer.firstName = firstName
customer.lastName = lastName
customer.phoneNumber = phoneNumber
customer.fullName = fullName
customer.email = () => email(randomArrayElement(usernames), randomArrayElement(domains))

export function employee() {
  var _firstName = employee.firstName()
  var _lastName = employee.lastName()
  return {
    firstName: _firstName,
    lastName: _lastName,
    fullName: employee.fullName(_firstName, _lastName),
    phoneNumber: employee.phoneNumber(),
    email: employee.email(_firstName, _lastName),
  }
}
employee.firstName = firstName
employee.lastName = lastName
employee.phoneNumber = phoneNumber
employee.fullName = fullName
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

function getHexString(number, byteCount) {
  const charCount = byteCount * 2;
  return _.padStart(
    Math.floor(number).toString(16).substr(0, charCount),
    charCount,
    '0'
  )
}

function maxNumberGivenByteCount(byteCount) {
  return Math.pow(256, byteCount);
}

export function objectId({timestamp, from, to, machineId, processId, counter} = {}) {
  const TIMESTAMP_BYTES = 4;
  const MACHINE_ID_BYTES = 3;
  const PROCESS_ID_BYTES = 2;
  const COUNTER_BYTES = 3;
  
  if (_.isNil(timestamp)) {
    timestamp = date(from, to);
  }
  
  if (_.isNil(machineId)) {
    machineId = integerInRange(0, maxNumberGivenByteCount(MACHINE_ID_BYTES));
  }
  
  if (_.isNil(processId)) {
    processId = integerInRange(0, maxNumberGivenByteCount(PROCESS_ID_BYTES));
  }
  
  if (_.isNil(counter)) {
    counter = integerInRange(0, maxNumberGivenByteCount(COUNTER_BYTES));
  }
  
  return [
    getHexString(new Date(timestamp).valueOf() / 1000, TIMESTAMP_BYTES),
    getHexString(machineId, MACHINE_ID_BYTES),
    getHexString(processId, PROCESS_ID_BYTES),
    getHexString(counter, COUNTER_BYTES),
  ].join('');
}

function dateInSeconds(_date) {
  return Math.floor(new Date(_date).valueOf() / 1000);
}

export function date(from, to) {
  if (_.isNil(from)) from = 'Tue Oct 04 2011 10:44:00 GMT-0700 (PDT)'; // https://github.com/goodeggs/avocado/commit/143f03ff267766be62189f901a174b02006650eb
  if (_.isNil(to)) to = 'Tue Dec 31 2019 16:00:00 GMT-0800 (PST)'; // ¯\_(ツ)_/¯
  
  return new Date(
    integerInRange(
      dateInSeconds(from),
      dateInSeconds(to)
    ) * 1000
  );
}

export function day(from, to) {
  const _date = date(from, to);
  const year = _.padStart(_date.getFullYear(), 4, '0');
  const month = _.padStart(_date.getMonth() + 1, 2, '0');
  const dayOfMonth = _.padStart(_date.getDate(), 2, '0');
  return `${year}-${month}-${dayOfMonth}`;
}

export function tzid() {
  return randomArrayElement(tzids);
}

export default {
  integerInRange,
  randomArrayElement,
  randomDigit,
  firstName,
  lastName,
  phoneNumber,
  email,
  fullName,
  employee,
  customer,
  producer,
  product,
  foodhub,
  objectId,
  date,
  day,
  tzid,
  uri,
  randomString,
}
