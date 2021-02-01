const { SetData } = require('./setdata.js');
const { ProgressBar } = require('./progress.js');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'raccoon',
  password: 'raccoondb',
  database: 'raccoondb',
});

const NICK = new SetData().nickName;
const MONEY = new SetData().money;
const LAST = new SetData().randomDate;
let progressBar = new ProgressBar(50);
// console.log(NICK(), MONEY(), LAST('01-29-2021', '02-28-2021'));

connection.connect();
let count = 'SELECT count(*) FROM user_log;';
// let sql = 'INSERT INTO user_log (nickname, money, last_visit) VALUES ?;';
let NUM = 20000;
for (let i = 0; i < NUM; i++) {
  // let params = [
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  //   [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`],
  // ];
  // connection.query(sql, (error, results, fields) => {
  //   if (error) throw error;
  // });
  connection.query(count, (error, results, fields) => {
    if (error) throw error;
    let n = results[0]['count(*)'];
    // progressBar.draw(n);
    console.log(n);
  });
}
connection.end();
