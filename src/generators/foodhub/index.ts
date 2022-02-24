import {Chance} from 'chance';

import createSampleGenerator from '../sample';

// TODO(ndhoule): Use goodeggs-foodhubs
const foodhubSlugs = ['sfbay', 'la', 'nola', 'nyc', 'MAR1', 'OKN2', 'VRN1'];

/**
 * Returns a randomly-selected foodhub slug, e.g. `sfbay`.
 */
const createSlugGenerator = (chance: Chance.Chance) => (): string =>
  createSampleGenerator(chance)(foodhubSlugs);

interface Foodhub {
  slug: ReturnType<typeof createSlugGenerator>;
}

const createFoodhubGenerators = (chance: Chance.Chance): Foodhub => ({
  slug: createSlugGenerator(chance),
});

export default createFoodhubGenerators;
