import _ from 'lodash';
import path from 'path';
import fs from 'fs';

import findExportsForModule from './find_exports_for_module';
import getFlowTypeDef from './get_flow_type_def';
import generateDocHtml from './generate_doc_html';

const baseDir = path.normalize(path.join(__dirname, '..', '..'));
const exportsForModule = findExportsForModule(path.join(baseDir, 'src'));

function diveForDefinition (identifier) {
  if (identifier.definition != null) return diveForDefinition(identifier.definition);
  return identifier;
}

function expressObject (objectDeclaration, prefix = '') {
  return _(objectDeclaration.properties)
    .map(({key, value}) => {
      const definition = diveForDefinition(value);

      const name = `fake.${prefix}${key.name}`;

      const docs = _(definition.leadingComments || [])
        .filter(({value}) => value[0] === '*')
        .map(({value}) => value.split('\n'))
        .flatten()
        .map((line) => line.replace(/^\s*\*\s?/, ''))
        .join('\n');

      const typeDef = getFlowTypeDef(key);

      const location = {
        path: path.relative(baseDir, definition.loc.filename),
        start: definition.loc.start.line,
        end: definition.loc.end.line,
      };

      if (definition.type === 'ObjectExpression') {
        return expressObject(definition, `${prefix}${key.name}.`)
      }

      else {
        return generateDocHtml({name, docs, typeDef, location});
      }
    })
    .flatten()
    .value();
}

const readmeFilename = path.join(baseDir, 'readme.md');
const readmeContents = fs.readFileSync(readmeFilename, 'utf8').split('\n');
const prefix = readmeContents.slice(0, _.findIndex(readmeContents, (string) => string.includes('automatically generated documentation starts here')) + 1).join('\n');
const suffix = readmeContents.slice(_.findIndex(readmeContents, (string) => string.includes('automatically generated documentation ends here'))).join('\n');
const newReadmeContents = `${prefix}\n${expressObject(exportsForModule.exportDefaultDeclaration).join('')}\n${suffix}`;
fs.writeFileSync(readmeFilename, newReadmeContents, 'utf8');
