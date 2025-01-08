require('dotenv').config();

module.exports = {
    db: process.env.MONGO_URI,
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET,
    nodeEnv: process.env.NODE_ENV || 'development',
};