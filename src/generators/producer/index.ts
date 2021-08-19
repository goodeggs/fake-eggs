import {Chance} from 'chance';

import {slugify} from '../../utils';

/**
 * Generates a random producer name, e.g., `Bahringer`.
 */
const createNameGenerator = (chance: Chance.Chance) => (): string => chance.company();

/**
 * Generates a random producer slug, e.g., `anderson`.
 * Optionally can override with an explicit name to generate from.
 */
const createSlugGenerator =
  (chance: Chance.Chance) =>
  (slug?: string): string =>
    slugify(slug ?? createNameGenerator(chance)());

const createProducerGenerators = (chance: Chance.Chance) => ({
  name: createNameGenerator(chance),
  slug: createSlugGenerator(chance),
});

export default createProducerGenerators;
