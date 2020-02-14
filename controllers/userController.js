const User = require("../models/user.js");

exports.addUser = function(req, res) {
  res.render('create.ejs');
};
exports.getUsers = function(req, res) {
  res.render('users.ejs', {
    users: User.getAll()
  });
};
exports.postUser = function(req, res) {
  var name = req.body.name;
  var age = req.body.age;

  const user = new User({name: name, age: age});
  user.save();
  console.log(User.getAll());

  res.redirect('/users');
};
