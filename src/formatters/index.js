import plain from './plainFormat.js';
import stylish from './stylishFormat.js';
import jsonFormat from './jsonFormat.js';

const formatters = {
  plain,
  stylish,
  json: jsonFormat,
};

const formatter = (ast, format) => formatters[format](ast);
export default formatter;
