const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function test(input) {
  let list = input[1].split(' ').map((el) => +el);
  list.sort((a, b) => a - b);
  console.log(list);
  return `${list[0]} ${list[list.length - 1]}`;
}

console.log(test(input));
