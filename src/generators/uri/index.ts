import {Chance} from 'chance';

import createSampleGenerator from '../sample';

/**
 * Generate a random URI, e.g., `https://adl2j.goodeggs.com/ax/faj23`
 * @param {*} domain
 */
const createUriGenerator =
  (chance: Chance.Chance) =>
  (domain = 'goodeggs.com'): string => {
    const sample = createSampleGenerator(chance);
    return chance.url({
      protocol: sample(['http', 'https']),
      domain,
    });
  };

export default createUriGenerator;
