const path = require('path');
const fs = require('fs');

const getFileExtension = (filename) => path.extname(filename).toLowerCase();

const fileExists = (filePath) => fs.existsSync(filePath);

const deleteFile = (filePath) => {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
};

module.exports = { getFileExtension, fileExists, deleteFile };
