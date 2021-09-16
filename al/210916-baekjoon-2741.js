const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function test(input) {
  let n = +input.shift();
  let result = '';
  for (let i = 1; i < n + 1; i++) {
    result += `${i}\n`;
  }
  console.log(result.trim());
}

test(input);
