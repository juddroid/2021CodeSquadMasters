const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function test(input) {
  let list = input.map((el) => el.split(' ').map((el) => +el));

  let result = '';

  while (list.length !== 0) {
    result += `${list[0][0] + list[0][1]}\n`;
    list.shift();
  }
  console.log(result.trim());
}

test(input);
