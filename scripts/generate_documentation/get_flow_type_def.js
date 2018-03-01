import _ from 'lodash';
import childProcess from 'child_process';

export default function getFlowTypeDef ({loc}) {
  const output = childProcess.execSync(`flow type-at-pos --quiet ${loc.filename} ${loc.start.line} ${loc.start.column + 1}`).toString('utf8');
  return _.first(output.split('\n'));
}