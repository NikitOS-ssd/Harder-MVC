//подключение изначальных функций и библиотек
const os = require('os');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//подключение созданных модулей
const userController = require('./controllers/userController.js');

//код работы web-сервера
var app = express();
app.set('view engine', 'ejs');

var userRouter = express.Router();
userRouter.get('/get-users', userController.showUsers);
userRouter.get('/create-user', userController.addUser)

app.use('/users', userRouter);

app.use('/', (req, res) => {
  res.send('Hello, unknown user');
});

app.listen(3030);
