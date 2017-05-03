// @flow

import sample from '../sample';

export default function tzid (): string {
  return sample(tzids);
}

const tzids = [
  "America/Los_Angeles",
  "America/Chicago",
  "America/New_York",
  "America/Denver",
  "America/Juneau",
  "Pacific/Honolulu"
];
