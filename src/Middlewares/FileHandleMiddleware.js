const multer = require('multer');

// Function to configure multer
const uploadFile = (path, param) => {
    const storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, path); // Set the destination path
        },
        filename: function (req, file, callback) {
            // Generate a unique filename
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            callback(null, uniqueSuffix + '-' + file.originalname); // Use original name with a unique suffix
        }
    });

    return multer({ storage: storage }).single(param); // Return the multer instance
};

// Export the uploadFile function
module.exports = uploadFile;