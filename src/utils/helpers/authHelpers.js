const jwt = require('jsonwebtoken');
const { AppError } = require('./errorHandler');
const config = require('../../config/config');
const logger = require('../../config/logs/logger');
const UserModel = require('../../Models/User/Users')
/**
 * Get the logged-in user's ID from the request.
 * Assumes the request has a valid JWT token in the Authorization header.
 * @param {Object} req - The Express request object
 * @returns {String} userId - The ID of the logged-in user
 */
const currentUserId = (req) => {
    
    if (!req?.headers.authorization || !req?.headers.authorization.startsWith('Bearer ')) {
        logger.error('Authorization token is missing or invalid');
       throw new AppError('Authorization token is missing or invalid', 401);
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        return decoded.id;
    } catch (error) {
        throw new AppError('Invalid or expired token', 401);
    }
};

/**
 * Middleware to attach the current logged-in user to the request object.
 * Assumes the token contains `userId`.
 * @param {Object} req - The Express request object
 * @param {Object} res - The Express response object
 * @param {Function} next - The next middleware function
 */
const currentUser = async (req) => {
    try {
        const authHeader = req.headers.authorization;

        // Check if the Authorization header exists and starts with "Bearer "
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            logger.error('Authorization token is missing or invalid');
            throw new AppError('Authorization token is missing or invalid', 401);
        }

        // Extract and verify the token
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, config.jwtSecret);

        // Find the user by ID (from the token payload)
        const user = await UserModel.findById(decoded.id).select('-password');
        if (!user) {
            logger.error('User not found');
            throw new AppError('User not found', 404);
        }

        return user; // Return the user object
    } catch (error) {
        logger.error('Failed to fetch current user '+error.message);
        // Handle token errors or database issues
        throw new AppError(error.message || 'Failed to fetch current user', 401);
    }
};



const generateToken = (payload, expiresIn = '300s') => 
    jwt.sign({ data: payload }, config.jwtSecret, { expiresIn });


const verifyToken = (token) =>
    jwt.verify(token, config.jwtSecret, (err, decoded) => (err ? null : decoded));



module.exports = {
    currentUser,
    currentUserId,
    generateToken,
    verifyToken
};
