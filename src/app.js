const express = require('express');
const userRoutes = require('./routes/user/userRoutes');
const authRoutes = require('./routes/auth/auth');
const { handleError } = require('./utils/helpers/errorHandler');
const helpers = require('./utils/index');
const cors = require('cors');

// const os = require('os');
const app = express();
// console.log(os.freemem()/(1024*1024));
// console.log(os.totalmem()/(1024*1024));
// console.log(os.userInfo())
// ;

app.use(express.json());
app.use(cors());
app.use('/api/user',userRoutes);
app.use('/api', authRoutes);

app.use(handleError);

global.helpers = helpers;

module.exports = app;