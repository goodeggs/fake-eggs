import randomArrayElement from '../random_array_element';

export default function tzid() {
  return randomArrayElement(tzids);
}
module.exports = tzid;

const tzids = [
  "America/Los_Angeles",
  "America/Chicago",
  "America/New_York",
  "America/Denver",
  "America/Juneau",
  "Pacific/Honolulu"
];