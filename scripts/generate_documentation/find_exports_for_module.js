import {parse as parseAst} from 'babylon';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const loadAst = _.memoize(function (sourceFilename) {
  // console.log(`Reading ${sourceFilename}...`);
  const code = fs.readFileSync(sourceFilename, 'utf-8');
  return parseAst(code, {sourceType: "module", sourceFilename, plugins: ["flow"]});
});

function loadAstForModule (modulePath, relativeLocation = __dirname) {
  const sourceFilename = require.resolve(modulePath, {paths: [relativeLocation]});
  return loadAst(sourceFilename)
}

const getIdentifiersFromDeclaration = {
  ImportDeclaration: resolveImportDeclaration,
  ExportNamedDeclaration: resolveExportNamedDeclaration,
  VariableDeclaration: resolveVariableDeclaration,
  FunctionDeclaration: resolveFunctionDeclaration,
};

function resolveImportDeclaration (declaration) {
  const modulePath = declaration.source.value;
  const relativeLocation = path.dirname(declaration.loc.filename);
  const fileAst = loadAstForModule(modulePath, relativeLocation);
  const {exportNamedDeclarations, exportDefaultDeclaration} = findExports(fileAst);

  const defaultIdentifier = _(declaration.specifiers)
    .filter({type: 'ImportDefaultSpecifier'})
    .map('local')
    .first();

  const identifiers = [];

  if (defaultIdentifier != null && exportDefaultDeclaration != null) {
    identifiers.push(Object.assign({}, defaultIdentifier, {definition: exportDefaultDeclaration}))
  }

  for (const specifier of _.filter(declaration.specifiers, {type: 'ImportSpecifier'})) {
    const exportIdentifer = exportNamedDeclarations.get(specifier.imported.name);
    if (exportIdentifier == null) break;
    identifiers.push(Object.assign({}, specifier.local, {definition: exportIdentifier}));
  }

  return identifiers;
}

function resolveVariableDeclaration (declaration) {
  return declaration.declarations.map(({id, init}) => Object.assign({}, id, {definition: init}))
}

function resolveFunctionDeclaration (declaration) {
  return [Object.assign({}, declaration.id, {definition: declaration})];
}

function resolveExportNamedDeclaration (exportDeclaration) {
  const {declaration: innerDeclaration} = exportDeclaration;
  if (innerDeclaration == null) return [];

  const getIdentifiers = getIdentifiersFromDeclaration[innerDeclaration.type];
  return (getIdentifiers != null) ? getIdentifiers(innerDeclaration) : [];
}

function findDeclarations (fileAst) {
  return _(fileAst.program.body)
    .map((declaration) => {
      const getIdentifiers = getIdentifiersFromDeclaration[declaration.type];
      return (getIdentifiers != null) ? getIdentifiers(declaration) : [];
    })
    .flatten()
    .reduce(
      (map, identifier) => map.set(identifier.name, identifier),
      new Map()
    );
}

function resolveDeclaration (declaration, scope) {
  if (declaration.type === 'Identifier') {
    return Object.assign({}, declaration, {definition: scope.get(declaration.name)});
  }

  if (declaration.type === 'ObjectExpression') {
    return Object.assign({}, declaration, {properties: declaration.properties.map((property) => {
      if (property.value.type !== 'Identifier') return property;
      const definition = scope.get(property.value.name);
      return Object.assign({}, property, {value: Object.assign({}, property.value, {definition})});
    })});
  }

  return declaration;
}

function findExports (fileAst) {
  const {body} = fileAst.program;
  const scope = findDeclarations(fileAst);

  const exportNamedDeclarations = new Map();

  _(body)
    // e.g. export {foo};
    .filter(({type, specifiers}) => type === 'ExportNamedDeclaration' && specifiers.length > 0)
    .map('specifiers')
    .flatten()
    .forEach((specifier) => {
      const definition = scope.get(specifier.local.name);
      if (declaration == null) return;
      exportNamedDeclarations.set(
        specifier.exported.name,
        Object.assign(
          {},
          specifier.exported.identifier,
          {definition}
        )
      );
    })

  _(body)
    // e.g. export const foo = 'bar';
    .filter(({type, declaration}) => type === 'ExportNamedDeclaration' && declaration != null)
    .map(resolveExportNamedDeclaration)
    .flatten()
    .forEach((identifier) => {
      exportNamedDeclarations.set(identifier.name, identifier);
    });

  const exportDefaultDeclaration = _(body)
    .filter({type: 'ExportDefaultDeclaration'})
    .map(({declaration}) => resolveDeclaration(declaration, scope))
    .first();

  return {exportNamedDeclarations, exportDefaultDeclaration};
}

export default function findExportsForModule (modulePath) {
  const fileAst = loadAstForModule(modulePath);
  return findExports(fileAst);
}


