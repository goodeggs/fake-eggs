// @flow

import sample from '../sample';

/**
 * Generate a random tzid, e.g., `America/Denver`.
 */
function tzid (): string {
  return sample(tzids);
}

export default tzid;

const tzids = [
  "America/Los_Angeles",
  "America/Chicago",
  "America/New_York",
  "America/Denver",
  "America/Juneau",
  "Pacific/Honolulu"
];
