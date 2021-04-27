// 첫째 줄에 (A+B)%C,
// 둘째 줄에 ((A%C) + (B%C))%C,
// 셋째 줄에 (A×B)%C,
// 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = fs.readFileSync('./test').toString().trim();
function multi(word) {
  const list = word.split(' ');
  const A = +list[0];
  const B = +list[1];
  const C = +list[2];
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}

multi(input);
