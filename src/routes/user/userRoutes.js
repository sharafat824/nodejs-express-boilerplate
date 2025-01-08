const express = require('express');
const {userList, createUser,user, filterUser, deleteUser}  = require('../../Controllers/User/UserController');
const router = express.Router();
const uploadFile = require('../../Middlewares/FileHandleMiddleware');
const protect = require('../../Middlewares/Auth/AuthMiddleware');

const upload = uploadFile('./public/user/images', 'image'); 

router.get('/list', protect, userList);
router.get('/:id',protect, user);
router.get('/filter/:key',protect,filterUser);
router.post('/create', upload, createUser);
router.delete('/delete/:id',protect, deleteUser);
module.exports=router; 