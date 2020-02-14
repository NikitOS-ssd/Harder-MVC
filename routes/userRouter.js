const express = require('express');
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.post('/post-user', userController.postUser);
userRouter.get('/create', userController.addUser);
userRouter.get('/', userController.getUsers);

module.exports = userRouter;
