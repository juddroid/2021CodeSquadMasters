const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function mathNation(input) {
  let length = input[0];
  let A = input[1]
    .split(' ')
    .map((el) => +el)
    .sort((a, b) => a - b);
  let B = input[2]
    .split(' ')
    .map((el) => +el)
    .sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += A[i] * B[i];
  }
  return sum;
}

let result = mathNation(input);
console.log(result);
