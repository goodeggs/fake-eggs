// @flow

import fake from '../src';
import type Factory from '../src/factory';

type Thing = {|
  +foo: string,
  +bar: number,
|};

const thingFactory: Factory<Thing> = fake.factory.flow();

// $FlowFixMe
console.log(thingFactory());
