import path from 'path';
import yaml from 'js-yaml';
import fs from 'fs';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const extractFileFormat = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8');

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parse = (filepath) => {
  const data = getData(filepath);
  const format = extractFileFormat(filepath);
  return parsers[format](data);
};

export default parse;
