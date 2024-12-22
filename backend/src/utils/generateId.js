const { nanoid } = require('nanoid');

const generateId = (length = 16) => {
  if (typeof length !== 'number' || length <= 0) {
    throw new Error('Length must be a positive number');
  }
  if (length > 255) {
    throw new Error('Length exceeds maximum allowed value (255)');
  }
  return nanoid(length);
};

module.exports = generateId;
