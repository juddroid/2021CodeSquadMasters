const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = fs.readFileSync('./test').toString().trim();
function multi(word) {
  const list = word.split(' ');
  console.log(+list[0] * +list[1]);
}

multi(input);
