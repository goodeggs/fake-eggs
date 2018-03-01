// @flow
import sample from '../sample';
import integer from '../integer';
import string from '../string';

/**
 * Returns a random zone, e.g. `chill`.
*/
function zone (): string {
  return sample(['chill', 'dry', 'frozen', 'produce']);
}

/**
 * Returns a random aisle, e.g., `F`.
*/
function aisle (): string {
  return string(1, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

/**
 * Returns a random rack, e.g., `12`;
*/
function rack (): string {
  return integer(1, 50).toString(10);
}

/**
 * Returns a random shelf, e.g., `3`
*/
function shelf (): string {
  return integer(1, 5).toString(10);
}

/**
 * Returns a location label for a warehouse location, e.g., `cF12-3`
 */
function label (): string {
  return `${string(1, 'cdfp')}${aisle()}${rack()}-${shelf()}`;
}

export default {zone, aisle, rack, shelf, label};