//ПОДКЛЮЧЕНИЕ ИЗНАЧАЛЬНЫХ ФУНКЦИЙ И БИБЛИОТЕК
const os = require('os');
const fs = require('fs');
const express = require('express');
var app = express();
const bodyParser = require('body-parser');


//ПОДКЛЮЧЕНИЕ СОЗДАННЫХ МОДУЛЕЙ И НАЧАЛО РАБОТЫ WEB-СЕРВЕРА
const userRouter = require('./routes/userRouter.js');
const homeRouter = require('./routes/homeRouter.js');
const adminRouter = require('./routes/adminRouter.js');

//код работы web-сервера
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false })); //для обработки данных с клиента

//установка контроллеров
app.use('/admin', adminRouter);
app.use('/users', userRouter);
app.use('/', homeRouter);

//обработка ненайденного запроса
app.use(function(req, res) {
  res.status(404).send('Ошибка, страница не обнаружена');
})

app.listen(3030);
