const mysql = require("mysql2");

//Подключение с помощью Pool(пулл подключения) с заранее установленым количеством возможных подключений
// const pool = mysql.createPool({
//   connectionLimit: 3,
//   host: "localhost",
//   port: 8889,
//   database: "userBases",
//   user: "root",
//   password: "root"
// });

//Подключение к серверу и самой базе данных на локалке
const connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  database: "userBases",
  user: "root",
  password: "root"
});

const sql = `INSERT INTO users(name, age) VALUES ?`; //sql команда

//данные для добавления
const users = [
  ["Nikita", 20],
  ["Alice", 25],
  ["Kate", 28]
];

const user = [
  ["Nikita", 19]
];

//Команды для добавления данных в БД
function plusDataInDB(sql, data) {
  connection.query(sql, [data], function(err, result) {
    if(err) {
      console.log('Ошибка!!!', err.errno);
    } else {
      console.log('Данные успешно внесены');
    }
  });
}

plusDataInDB(sql, user);

//Команды на удаление данных с фильтрами
// connection.query("DELETE FROM users");
// connection.query("DELETE FROM users WHERE id<8");
global.idZ = 0;
global.sost = false;

function getDataFromDB(cmd) {
  connection.query(cmd, function(err, result) {
    if(err) {
      console.log("Ошибка: \n", err);
    } else {
      if(result.length > 7) {
        global.sost = true;
        global.idZ = result[result.length - 1].id;
        console.log('Идёт работа');
      } else {
        sost = false;
        console.log("Результат: \n", result);
      }
    }
  });
}
getDataFromDB('SELECT * FROM users');

function deleteData() {
  console.log(global.sost + '\n' + global.idZ);
  if(global.sost == true) {
    connection.query('DELETE FROM users WHERE id<' + global.idZ);
  }
}
setTimeout(deleteData, 1000);


//
// const sql = 'INSERT INTO users(name, age) VALUES ?';
// const user = [
//   ['Nikita', 20]
// ];
//
// pool.query(sql, [user], function(err, result) {
//   if(err) {
//     console.log("Error", err);
//   } else {
//     console.log("Successful creation");
//   }
// });
