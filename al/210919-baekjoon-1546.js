const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function test(input) {
  let list = input[1]
    .split(' ')
    .map((el) => +el)
    .sort((a, b) => b - a);
  let max = list[0];
  const getAvr = (list) => {
    let sum = list.reduce((a, b) => a + b, 0);
    return sum / list.length;
  };
  const getNewScore = (score) => {
    return (score / max) * 100;
  };
  let newScore = list.map((el) => getNewScore(el));

  return getAvr(newScore);
}

console.log(test(input));
