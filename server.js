const os = require('os');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var allUsers = [];

app.get('/create', function(req, res) {
  var showFile = fs.createReadStream(__dirname + '/views/adduser.ejs', 'utf8');
  showFile.pipe(res);
})
app.post('/adduser', urlencodedParser, function(req, res) {
  console.log(req.body);
  var name = req.body.name;
  var age = req.body.age;
  var user = {
    name: name,
    age: age
  }

  allUsers.push(user);

  res.render('home.ejs', {
    userslist: allUsers
  });
})

app.get('/', function(req, res) {
  res.render('home.ejs', {
    userslist: 'Non'
  });
})

app.listen(7000);
