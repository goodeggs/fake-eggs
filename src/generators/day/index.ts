import {Chance} from 'chance';

import createDateGenerator from '../date';

/**
 * Returns a randomly-selected day string (`YYYY-MM-DD`), optionally between `from` and `to`.
 */
const createDayGenerator = (chance: Chance.Chance) => (
  from?: Date | string,
  to?: Date | string,
): string => {
  const _date = createDateGenerator(chance);
  const date = _date(from, to);
  const year = String(date.getFullYear()).padStart(4, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${dayOfMonth}`;
};

export default createDayGenerator;
