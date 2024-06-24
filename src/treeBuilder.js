import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const generalKeys = _.union(keys1, keys2);
  const result = generalKeys.reduce((acc, key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return [...acc, {
        key,
        value: buildTree(data1[key], data2[key]),
        status: 'nested',
      }];
    } if (!Object.hasOwn(data1, key)) {
      return [...acc, { key, value: data2[key], status: 'added' }];
    } if (!Object.hasOwn(data2, key)) {
      return [...acc, { key, value: data1[key], status: 'deleted' }];
    } if (data1[key] !== data2[key]) {
      return [...acc, {
        key,
        oldValue: data1[key],
        newValue: data2[key],
        status: 'changed',
      }];
    }
    return [...acc, { key, value: data1[key], status: 'unchanged' }];
  }, []);
  const temp = _.sortBy(result, ['key']);
  return temp;
};
export default buildTree;
