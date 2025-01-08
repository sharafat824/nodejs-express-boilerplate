const app = require('./app');
const connectdb = require('./config/db');
require('dotenv').config();

const port = process.env.PORT || 5000;
connectdb();

app.listen(port);