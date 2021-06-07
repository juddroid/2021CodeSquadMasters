const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('');

function lostBracket(num) {
  let numList = num.join('').split('-');
  let list = [];
  for (let i = 0; i < numList.length; i++) {
    if (numList[i].includes('+')) {
      let sumList = numList[i].split('+');
      let sum = sumList.reduce((acc, cur) => (acc += +cur), 0);
      list.push(sum);
    } else {
      list.push(+numList[i]);
    }
  }
  console.log(list);
  let first = list[0];
  let current = first;
  for (let i = 1; i < list.length; i++) {
    current = current - list[i];
  }
  console.log(current);
  return current;
}

lostBracket(input);
