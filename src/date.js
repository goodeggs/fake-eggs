import _ from 'lodash';
import integerInRange from './integer_in_range';

function dateInSeconds(_date) {
  return Math.floor(new Date(_date).valueOf() / 1000);
}

export default function date(from, to) {
  if (_.isNil(from)) from = 'Tue Oct 04 2011 10:44:00 GMT-0700 (PDT)'; // https://github.com/goodeggs/avocado/commit/143f03ff267766be62189f901a174b02006650eb
  if (_.isNil(to)) to = 'Tue Dec 31 2019 16:00:00 GMT-0800 (PST)'; // ¯\_(ツ)_/¯
  
  return new Date(
    integerInRange(
      dateInSeconds(from),
      dateInSeconds(to)
    ) * 1000
  );
}
