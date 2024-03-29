import {Chance} from 'chance';

import createDateGenerator from '../date';
import createIntegerGenerator from '../integer';

const getHexString = (number: number, byteCount: number): string => {
  const charCount = byteCount * 2;
  return Math.floor(number).toString(16).substr(0, charCount).padStart(charCount, '0');
};

const maxNumberGivenByteCount = (byteCount: number): number => 256 ** byteCount;

/**
 * Generates a random mongodb-friendly objectId string.
 * TODO(serhalp) Is this necessary? Maybe just generate a random 24-character hex string?
 */
const createObjectIdGenerator =
  (chance: Chance.Chance) =>
  ({
    counter,
    from = new Date(0),
    machineId,
    processId,
    timestamp,
    to,
  }: {
    counter?: number;
    from?: string | Date;
    machineId?: number;
    processId?: number;
    timestamp?: string | Date | number;
    to?: string | Date;
  } = {}): string => {
    if (from.valueOf() < 0) {
      throw new RangeError('`from` cannot be earlier than Unix epoch (1970-01-01 00:00:00.000)');
    }
    if (to != null && to.valueOf() < 0) {
      throw new RangeError('`to` cannot be earlier than Unix epoch (1970-01-01 00:00:00.000)');
    }

    const date = createDateGenerator(chance);
    const integer = createIntegerGenerator(chance);

    const TIMESTAMP_BYTES = 4;
    const MACHINE_ID_BYTES = 3;
    const PROCESS_ID_BYTES = 2;
    const COUNTER_BYTES = 3;

    if (timestamp == null) timestamp = date(from, to);
    if (machineId == null) machineId = integer(0, maxNumberGivenByteCount(MACHINE_ID_BYTES));
    if (processId == null) processId = integer(0, maxNumberGivenByteCount(PROCESS_ID_BYTES));
    if (counter == null) counter = integer(0, maxNumberGivenByteCount(COUNTER_BYTES));

    return [
      getHexString(new Date(timestamp).valueOf() / 1000, TIMESTAMP_BYTES),
      getHexString(machineId, MACHINE_ID_BYTES),
      getHexString(processId, PROCESS_ID_BYTES),
      getHexString(counter, COUNTER_BYTES),
    ].join('');
  };

export default createObjectIdGenerator;
