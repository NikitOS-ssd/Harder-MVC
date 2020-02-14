const express = require('express');
const userController = require("../controllers/userController.js");
const homeRouter = express.Router();

homeRouter.get('/about', function(req, res) {
  res.send('О нас');
});
homeRouter.get('/', function(req, res) {
  res.render('index.ejs');
});

module.exports = homeRouter;
