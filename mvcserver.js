//подключение изначальных функций и библиотек
const os = require('os');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//подключение созданных модулей
const userRouter = require('./routes/userRouter.js');
const homeRouter = require('./routes/homeRouter.js');

//код работы web-сервера
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRouter);
app.use('/', homeRouter);

app.use(function(req, res) {
  res.status(404).send('Ошибка, страница не обнаружена');
})

app.listen(3030);
