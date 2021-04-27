const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = fs.readFileSync('./test').toString().trim();
function devide(word) {
  const list = word.split(' ');
  console.log(+list[0] / +list[1]);
}

devide(input);
