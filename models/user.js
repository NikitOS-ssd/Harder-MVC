const users = [];
const mysql = require("mysql2");
//
const connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  database: "userBases",
  user: "root",
  password: "root"
});

module.exports = class User {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
  }

  save(name, age) {
    users.push(this);
    var data = [
      [name, age]
    ];
    console.log('DATA*', data);
    connection.query('INSERT INTO users(name, age) VALUES ?', [data], function(err, result) {
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
        console.log('Данные получены', result);
        return result;
      }
    });
  }
}
