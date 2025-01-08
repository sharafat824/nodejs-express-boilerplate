const logger = require('../../config/logs/logger');

class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true; // Marks this as an operational error
        Error.captureStackTrace(this, this.constructor);
    }
}

const handleError = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.isOperational ? err.message : 'Internal Server Error';
    
    // Log error
    logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    
    // Send error response
    res.status(statusCode).json({
        status: 'error',
        message,
    });
};

module.exports = { AppError, handleError };
