const fs = require('fs');
// const num = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString();

function word(p) {
  const split = p.split(' ');
  const filtered = split.filter((el) => el !== '\n' && el !== '');
  console.log(filtered.length);
}

word(input);
