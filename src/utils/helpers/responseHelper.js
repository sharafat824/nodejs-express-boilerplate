const success = (res, message="operation success", data = {}) => {
    res.status(200).json({
        status: 'success',
        message,
        data,
    });
};

const failed = (res, statusCode, message="operation failed") => {
    res.status(statusCode).json({
        status: 'error',
        message,
    });
};

module.exports = { failed, success };
