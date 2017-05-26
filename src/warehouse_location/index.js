// @flow
import sample from '../sample';
import integer from '../integer';
import string from '../string';

function zone (): string {
  return sample(['chill', 'dry', 'frozen', 'produce']);
}

function aisle (): string {
  return string(1, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

function rack (): string {
  return integer(1, 50).toString(10);
}

function shelf (): string {
  return integer(1, 5).toString(10);
}

function label (): string {
  return `${string(1, 'cdfp')}${aisle()}${rack()}-${shelf()}`;
}

export default {zone, aisle, rack, shelf, label};