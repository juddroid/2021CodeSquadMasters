const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString().trim().split('\n');

function sortNumber(num) {
  const length = num[0];

  num.shift();

  const list = Array.from(new Set(num)).sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    console.log(list[i]);
  }
}
sortNumber(input);
