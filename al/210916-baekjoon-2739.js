const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split(' ');

function test(input) {
  let num = +input[0];
  for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

console.log(test(input));
