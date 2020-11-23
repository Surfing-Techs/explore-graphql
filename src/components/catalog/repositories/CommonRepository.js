const fs = require('fs');

const CommonRepository = module.exports;

CommonRepository.loadData = async (filePath) => {
  const data = await fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

CommonRepository.writeData = (filePath, dataToWrite) => {
  const data = JSON.stringify(dataToWrite, null, 4);
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      throw err;
    }
    console.log('JSON data is saved.');
  });
};
