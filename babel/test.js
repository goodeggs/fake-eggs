// @flow

import {parse} from 'babylon';
import * as t from 'babel-types';
import traverse from 'babel-traverse';
import generate from 'babel-generator';
import fs from 'fs';
import filePath from 'path';
import type {Path} from 'babel-traverse';

import babelPlugin from './index';

const sourceFilename = filePath.resolve(filePath.join(__dirname, 'example.js'));
const code = fs.readFileSync(sourceFilename, 'utf8');

const {visitor, plugins} = babelPlugin({types: t});

const ast = parse(code, {
  sourceType: "module",
  sourceFilename,
  plugins,
});

traverse(ast, visitor);
console.log(generate(ast).code);
