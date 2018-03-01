// @flow
import integer from '../integer';

/**
Returns a randomly-selected digit (integer between 0 and 9).
*/
function digit () { return integer(0, 10) }

export default digit;
