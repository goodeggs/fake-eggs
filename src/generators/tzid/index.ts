import {Chance} from 'chance';

import createSampleGenerator from '../sample';

const DEFAULT_TZIDS = [
  'America/Los_Angeles',
  'America/Chicago',
  'America/New_York',
  'America/Denver',
  'America/Juneau',
  'Pacific/Honolulu',
];

/**
 * Generate a random tzid, e.g., `America/Denver`.
 */
const createTzidGenerator =
  (chance: Chance.Chance) =>
  (tzids: string[] = DEFAULT_TZIDS): string =>
    createSampleGenerator(chance)(tzids);

export default createTzidGenerator;
