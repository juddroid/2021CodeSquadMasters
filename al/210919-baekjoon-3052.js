const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function test(input) {
  let dic = {};
  let num = 42;
  for (let i = 0; i < input.length; i++) {
    let extra = +input[i] % num;
    if (!dic[extra]) dic[extra] = true;
  }
  return Object.keys(dic).length;
}

console.log(test(input));
