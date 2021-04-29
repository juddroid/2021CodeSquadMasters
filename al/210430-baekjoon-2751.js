const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString().trim().split('\n');

function sortNumber(num) {
  const length = num[0];
  num.shift();
  let result = '';
  Array.from(new Set(num))
    .sort((a, b) => a - b)
    .forEach((el) => (result += `${el}\n`));
  console.log(result);
}
sortNumber(input);
