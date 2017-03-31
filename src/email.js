import usernames from '../data/usernames.json'
import domains from '../data/domains.json'
import randomArrayElement from './random_array_element';

export default function email(username, domain) {
  if (!username) username = randomArrayElement(usernames)
  if (!domain) domain = randomArrayElement(domains)
  return `${username}@${domain}`
}
