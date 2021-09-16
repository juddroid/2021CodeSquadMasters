const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function solution(input) {
  let n = +input.shift();
  const getSum = (num) => {
    if (num === 0) return 0;
    else return num + getSum(num - 1);
  };

  return getSum(n);
}

console.log(solution(input));
