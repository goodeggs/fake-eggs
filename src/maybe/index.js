// @flow
import sample from '../sample';

const returnUndefined = () => undefined;
const returnNull = () => null;

export default function maybe <T> (returnValue: () => T): ?T {
  const getter = sample([
    returnUndefined,
    returnNull,
    returnValue,
  ]);
  
  return getter();
}
