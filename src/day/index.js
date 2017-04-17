// @flow

import _ from 'lodash';

import date from '../date';

export default function day(from: Date | string, to: Date | string): string {
  const _date = date(from, to);
  const year = _.padStart(_date.getFullYear(), 4, '0');
  const month = _.padStart(_date.getMonth() + 1, 2, '0');
  const dayOfMonth = _.padStart(_date.getDate(), 2, '0');
  return `${year}-${month}-${dayOfMonth}`;
}
