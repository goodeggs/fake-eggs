// @flow

import fake from '..';
import type Factory from '../factory';

type Thing = {|
  +foo: string,
  +bar: number,
  +baz: {
    +a: string,
    +b: number,
  }
|};

const thingFactory: Factory<Thing> = fake.factory.flow();

// $FlowFixMe
console.log(thingFactory());
