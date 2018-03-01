type DefaultCreatorsFor<T: Object> = $ObjMap<T, <V>(V) => (() => V)>;
type OverridesFor<T: Object> = $ObjMap<T, <V>(V) => ?V>;
type ObjectCreator<T: Object> = (?OverridesFor<T>) => T;

/**
 * Makes a function that can build up arbitrary objects. For example:
 * 
 * ```js
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
 */
function factory <T: Object> (defaults: DefaultCreatorsFor<T>): ObjectCreator<T> {
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

export default factory;
