import _ from 'lodash';

const stringify = (value, depth) => {
  const iter = (obj, depth2) => {
    const indent = '  '.repeat(depth2 * 2);
    if (!_.isObject(obj)) {
      return obj;
    }
    const keys = Object.keys(obj);
    const result = keys.map((el) => `    ${indent}${el}: ${stringify(obj[el], depth2 + 1)}`);
    return ['{', ...result, `${indent}}`].join('\n');
  };
  return iter(value, depth);
};
const stylish = (difference) => {
  const iter = (diff, depth) => {
    const spacesCount = 2;
    const indent = '  '.repeat(depth * spacesCount - 2);
    const lines = diff.map((el) => {
      switch (el.status) {
        case 'deleted':
          return `  ${indent}- ${el.key}: ${stringify(el.value, depth)}`;
        case 'added':
          return `  ${indent}+ ${el.key}: ${stringify(el.value, depth)}`;
        case 'unchanged':
          return `  ${indent}  ${el.key}: ${stringify(el.value, depth)}`;
        case 'changed':
          return `  ${indent}- ${el.key}: ${stringify(el.oldValue, depth)}\n  ${indent}+ ${el.key}: ${stringify(el.newValue, depth)}`;
        case 'nested':
          return `  ${indent}  ${el.key}: ${iter(el.value, depth + 1)}`;
        default:
          throw new Error(`Invalid status - ${el.status}`);
      }
    });
    return ['{', ...lines, `${indent}}`].join('\n');
  };
  return iter(difference, 1);
};

export default stylish;
