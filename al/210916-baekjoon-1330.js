const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split(' ');

function compare(input) {
  if (+input[0] === +input[1]) return '==';
  if (+input[0] > +input[1]) return '>';
  return '<';
}

console.log(compare(input));
