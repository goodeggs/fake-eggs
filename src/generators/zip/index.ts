import {Chance} from 'chance';

/**
 * Returns a random valid zip, with the ability to specify ZIP+4 format
 */
const createZipGenerator =
  (chance: Chance.Chance) =>
  (opts?: Chance.Options | undefined): string =>
    chance.zip(opts);

export default createZipGenerator;
