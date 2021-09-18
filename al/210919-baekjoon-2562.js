const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function test(input) {
  let list = [];
  for (let i = 0; i < input.length; i++) {
    list.push({ idx: i + 1, value: +input[i] });
  }
  list.sort((a, b) => b.value - a.value);

  let result = `${list[0].value}\n${list[0].idx}`;
  return result;
}

console.log(test(input));
