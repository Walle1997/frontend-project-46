import fs from 'fs';
import genDiff from '../index.js';
import getFixturePath from '../src/helpers.js';

const data = [
  {
    name: 'gendiffJSON',
    file1: 'file1.json',
    file2: 'file2.json',
    format: 'stylish',
    txt: 'stylish.text.txt',
  },
  {
    name: 'gendiffYAML',
    file1: 'file1.yaml',
    file2: 'file2.yaml',
    format: 'plain',
    txt: 'plain.text.txt',
  },
  {
    name: 'gendiffTwoFormats',
    file1: 'file1.json',
    file2: 'file2.yaml',
    format: 'json',
    txt: 'json.text.txt',
  },
  {
    name: 'gendiffDefault',
    file1: 'file1.json',
    file2: 'file2.yaml',
    txt: 'stylish.text.txt',
  },
];

data.forEach(({
  name, file1, file2, format, txt,
}) => test(`${name}`, () => {
  expect(
    genDiff(getFixturePath(file1), getFixturePath(file2), format),
  ).toEqual(fs.readFileSync(getFixturePath(txt), 'utf-8'));
}));
