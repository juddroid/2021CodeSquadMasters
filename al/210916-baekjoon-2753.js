const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split(' ');

function fullYear(input) {
  let year = +input[0];
  if (year % 4 === 0) {
    if (year % 100 !== 0) return 1;
    if (year % 400 === 0) return 1;
  }
  return 0;
}

console.log(fullYear(input));
