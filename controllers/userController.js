const User = require("../models/user.js");

exports.addUser = function(req, res) {
  res.render('create.ejs');
};
exports.getUsers = function(req, res) {
  var users = User.getAll();
  console.log(users);

  res.render('users.ejs');
};
exports.postUser = function(req, res) {
  var name = req.body.name;
  var age = req.body.age;

  const user = new User({name: name, age: age});
  user.save(name, age);

  res.redirect('/users');
};
