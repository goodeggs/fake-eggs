// @flow
type DefaultCreatorsFor<T: Object> = $ObjMap<T, <V>(V) => (() => V)>;
type OverridesFor<T: Object> = $Rest<$ObjMap<T, <V>(V) => ?V>, {}>;
export type Factory<T: Object> = (?OverridesFor<T>) => T;

/**
 * Makes a function that can build up arbitrary objects.
 * For example:
 * 
 * ```js
 * import fake from 'fake-eggs';
 * 
 * const recipeCreator = fake.factory({
 *   _id: fake.objectId,
 *   name: fake.string,
 *   photo: fake.uri,
 * });
 * const recipe = recipeCreator({name: 'Sponge Cake'});
 * // => {
 * //      _id: '5153d879dcc2d3e27e689de6',
 * //      name: 'Sponge Cake',
 * //      photo: 'http://u6.goodeggs.com/h4mko8c/61n6ut5/c3nr9',
 * //    }
 * ```
 * 
 * This function really shines if you're leveraging flow types. Here's an example:
 * 
 * ```js
 * import fake from 'fake-eggs';
 * import type {Factory} from 'fake-eggs/factory';
 * 
 * type Recipe = {|
 *   +_id: string,
 *   +name: string,
 *   +photo: string,
 * |};
 * 
 * const recipeCreator: Factory<Recipe> = fake.factory({
 *   _id: fake.objectId,
 *   name: fake.string,
 *   photo: fake.uri,
 * });
 * const recipe = recipeCreator({name: 'Sponge Cake'});
 * ```
 * 
 * In this case, flow will complain if:
 *   - You include properties that are not present in the provided type
 *   - You specify factory functions that don't match the provided type
 *   - You include overridden properties that are not present in the provided type
 *   - You include overridden properties that don't match the provided type
 * 
 * Additionally, flow will understand that the resulting object created by the factory
 * is of the provided type.
 */
function factory <T: Object> (defaults: DefaultCreatorsFor<T>): Factory<T> {
  return function (overrides: ?OverridesFor<T>): T {
    const output = {};
    for (const key of Object.keys(defaults)) {
      const valueCreator = defaults[key];
      const override = overrides != null ? overrides[key] : null;
      output[key] = override != null ? override : valueCreator();
    }
    // $FlowFixMe
    return output;
  };
}

factory.flow = <T: Object> (): Factory<T> => {
  throw new Error('Something helpful about installing a babel plugin.')
}

export default factory;
