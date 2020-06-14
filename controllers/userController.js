const User = require("../models/user.js");
// const createNewUser = require("../database.js");

exports.createUser = function(req, res) {
  res.render('create.ejs');
};

exports.getUsers = function(req, res) {
  User.getAll();

  res.render('users.ejs');
};

exports.addUser = function(req, res) {
  var name = req.body.name;
  var age = req.body.age;
  var hobby = req.body.hobby;

  const user = new User({name: name, age: age, hobby: hobby});
  user.save(name, age, hobby);

  res.redirect('/users');
};
