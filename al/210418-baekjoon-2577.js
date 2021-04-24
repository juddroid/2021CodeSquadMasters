const fs = require('fs');
// const num = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString().split('\n');

function countNumber(input) {
  const numberA = input[0];
  const numberB = input[1];
  const numberC = input[2];
  const multipleArr = (numberA * numberB * numberC).toString().split('');
  const numSet = {};
  for (let i = 0; i < multipleArr.length; i++) {
    if (numSet[multipleArr[i]]) numSet[multipleArr[i]]++;
    else numSet[multipleArr[i]] = 1;
  }

  for (let i = 0; i < 10; i++) {
    if (!numSet[i]) console.log(0);
    else console.log(numSet[i]);
  }
}

countNumber(input);
