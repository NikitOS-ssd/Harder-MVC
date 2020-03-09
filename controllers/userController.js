const User = require("../models/user.js");
const createNewUser = require("../database.js");

exports.addUser = function(req, res) {
  res.render('create.ejs');
};

exports.getUsers = function(req, res) {
  User.getAll();

  res.render('users.ejs');
};

exports.postUser = function(req, res) {
  var name = req.body.name;
  var age = req.body.age;

  const user = new User({name: name, age: age});
  user.save(name, age);

  res.redirect('/users');
};
