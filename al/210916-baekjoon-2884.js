const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split(' ');

function test(input) {
  let h = +input[0];
  let m = +input[1];
  console.log(h, m);
  const c = 45;
  let newH = 0;
  let newM = 0;
  if (m - c < 0) {
    newM = 60 - (c - m);
    if (h === 0) newH = 23;
    else newH = h - 1;
  } else {
    newM = m - c;
    newH = h;
  }
  return `${+newH} ${+newM}`;
}

console.log(test(input));
