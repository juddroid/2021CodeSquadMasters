const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function test(input) {
  let list = input.map((el) => el.split(' ').map((el) => +el));

  let result = '';
  let i = 0;
  while (list[i][0] !== 0) {
    result += `${list[i][0] + list[i][1]}\n`;

    i++;
  }
  console.log(result.trim());
}

test(input);
