const path = require('path');
const fs = require('fs');

const dataFilePath = path.resolve(
  process.env.DATA_FILE_PATH ||
    path.join(__dirname, '../../public/data/articles.json')
);

const readData = () => {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading or parsing JSON data:', error.message);
    return [];
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing JSON data:', error.message);
    throw error;
  }
};

module.exports = { readData, writeData };
