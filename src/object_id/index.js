// @flow

import _ from 'lodash';

import date from '../date';
import integerInRange from '../integer_in_range';

export default function objectId({
  timestamp,
  from,
  to,
  machineId,
  processId,
  counter,
}: {
  +timestamp?: string|Date|number,
  +from?: string|Date,
  +to?: string|Date,
  +machineId?: number,
  +processId?: number,
  +counter?: number,
} = {}): string {
  const TIMESTAMP_BYTES = 4;
  const MACHINE_ID_BYTES = 3;
  const PROCESS_ID_BYTES = 2;
  const COUNTER_BYTES = 3;
  
  if (timestamp == null) timestamp = date(from, to);
  if (machineId == null) machineId = integerInRange(0, maxNumberGivenByteCount(MACHINE_ID_BYTES));
  if (processId == null) processId = integerInRange(0, maxNumberGivenByteCount(PROCESS_ID_BYTES));
  if (counter == null) counter = integerInRange(0, maxNumberGivenByteCount(COUNTER_BYTES));
  
  return [
    getHexString(new Date(timestamp).valueOf() / 1000, TIMESTAMP_BYTES),
    getHexString(machineId, MACHINE_ID_BYTES),
    getHexString(processId, PROCESS_ID_BYTES),
    getHexString(counter, COUNTER_BYTES),
  ].join('');
}

function getHexString(number: number, byteCount: number): string {
  const charCount = byteCount * 2;
  return _.padStart(
    Math.floor(number).toString(16).substr(0, charCount),
    charCount,
    '0'
  )
}

function maxNumberGivenByteCount(byteCount: number): number {
  return Math.pow(256, byteCount);
}

