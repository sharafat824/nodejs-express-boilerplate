const mongoose = require('mongoose');
require('dotenv').config();
const config = require('./config');
const logger = require('./logs/logger')

const connect = async ()=>{
    mongoose.connect(config.db)
    .then()
    .catch(err => {
        logger.error('Database connection error:', err);
        process.exit(1);
    });
}
module.exports = connect;
// fFhr76rthQ0rEOuX
// sharafatt6