import path from 'path';
import fs from 'fs';
import _ from 'lodash';
 
const readFile = (filepath) => {
  const pathF = path.resolve(process.cwd(), filepath);
  return JSON.parse(fs.readFileSync(pathF, 'utf-8'));
};
 
const gendiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
 
  const keys = _.union(_.keys(data1), _.keys(data2)).sort();
  const diffObj = keys.map((key) => {
    if (_.has(data1, key) && !_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
 
    if (_.has(data2, key) && !_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
 
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
 
    return `    ${key}: ${data1[key]}`;
  });
 
  return `{\n${diffObj.join('\n')}\n}`;
};
 
export default gendiff;
