const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function solution(input) {
  let n = +input.shift();
  const plus = (a, b) => a + b;
  for (let i = 0; i < n; i++) {
    let list = input[i].split(' ');
    console.log(plus(+list[0], +list[1]));
  }
}

solution(input);
