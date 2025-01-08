const express = require('express');

const router = express.Router();

const {regiserUser, login}  = require('../../Controllers/Auth/Authcontroller');

router.post('/register', regiserUser);
router.post('/login', login);


module.exports = router;