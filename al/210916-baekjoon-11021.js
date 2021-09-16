const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function test(input) {
  let n = +input.shift();
  let result = '';
  for (let i = 0; i < n; i++) {
    let str = `Case`;
    let list = input[i].split(' ');
    result += `${str} #${i + 1}: ${+list[0] + +list[1]}\n`;
  }
  console.log(result.trim());
}

test(input);
