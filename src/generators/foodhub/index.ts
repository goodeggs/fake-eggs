import {Chance} from 'chance';

import createSampleGenerator from '../sample';

// TODO(ndhoule): Use goodeggs-foodhubs
const foodhubSlugs = ['sfbay', 'la', 'nola', 'nyc', 'tomorrowland'];

/**
 * Returns a randomly-selected foodhub slug, e.g. `sfbay`.
 */
const createSlugGenerator = (chance: Chance.Chance) => (): string =>
  createSampleGenerator(chance)(foodhubSlugs);

const createFoodhubGenerators = (chance: Chance.Chance) => ({
  slug: createSlugGenerator(chance),
});

export default createFoodhubGenerators;
