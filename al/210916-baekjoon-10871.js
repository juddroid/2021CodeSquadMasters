const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function test(input) {
  let info = input.shift().split(' ');
  let n = +info[0];
  let x = +info[1];
  let list = input[0].split(' ').map((el) => +el);

  let result = '';
  for (let i = 0; i < n; i++) {
    if (list[i] < x) {
      result += list[i] + ' ';
    }
  }
  console.log(result.trim());
}

test(input);
