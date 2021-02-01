let fs = require('fs');

const { SetData } = require('./setdata.js');

const NICK = new SetData().nickName;
const MONEY = new SetData().money;
const LAST = new SetData().randomDate;

let NUM = 1000000;

// fs.appendFile('myData.csv', a, function (err) {
//   if (err) throw err;

// for (let i = 0; i < NUM; i++) {
//   let params = [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`];
//   a = params.join(',');
// }

//   console.log('Saved!');
// });

let params = '';

for (let i = 0; i < NUM; i++) {
  params = [`${NICK()}`, `${MONEY()}`, `${LAST('01-29-2021', '02-28-2021')}`];
  let join = params.join(',');
  console.log(join);
}

// const data = new Uint8Array(Buffer.from(params));
// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log(data);
//   console.log('The file has been saved!');
// });
