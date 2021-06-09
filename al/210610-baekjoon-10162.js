const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim();

function microwave(num) {
  const buttonA = 300;
  const buttonB = 60;
  const buttonC = 10;

  let time = +num;

  let countA = 0;
  let countB = 0;
  let countC = 0;

  let result;

  while (time > 0) {
    if (time >= buttonA) {
      time -= buttonA;
      countA++;
    } else if (time >= buttonB) {
      time -= buttonB;
      countB++;
    } else if (time >= buttonC) {
      time -= buttonC;
      countC++;
    } else {
      time = 0;
      result = -1;
    }
  }

  let list = [countA, countB, countC].join(' ');

  return result === -1 ? result : list;
}

console.log(microwave(input));
