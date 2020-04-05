const fs = require("fs");
const mysql = require("mysql2");
const users = [];

const connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  database: "todolister",
  user: "root",
  password: "root"
});

module.exports = class User {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.hobby = obj.hobby;
  }

  save(name, age, hobby) {
    users.push(this);
    var data = [
      [name, age, hobby]
    ];

    connection.query('INSERT INTO users(name, age, hobby) VALUES ?', [data], function(err, result) {
      if(err) {
        console.log('Ошибка', err);
      } else {
        console.log('Данные успешно добавлены');
      }
    });
  }

  static getAll() {
    // console.log(users);
    connection.query('SELECT * FROM users', function(err, result) {
      if(err) {
        console.log('Ошибка', err);
      } else {
        console.log('PR: ', users);
        console.log(result);
      }
    });
  }
}
