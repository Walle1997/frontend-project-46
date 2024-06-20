import getStylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (data, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return json(data);
    default:
      throw new Error(`Unknown ${format}.`);
  }
};
