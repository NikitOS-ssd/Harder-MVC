const express = require('express');
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.post('/post-user', userController.addUser);
userRouter.get('/create', userController.createUser);
userRouter.get('/', userController.getUsers);

module.exports = userRouter;
