import formatter from './formatters/index.js';
import parse from './parse.js';
import buildTree from './treeBuilder.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);
  const diff = buildTree(data1, data2);
  return formatter(diff, format);
};
