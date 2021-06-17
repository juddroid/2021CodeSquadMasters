const X = 10;
const Y = 85;
const D = 30;

function solution(X, Y, D) {
  for (let i = 1; i < 10000000000; i++) {
    if (X + D * i >= Y) return i;
  }
}

let result = solution(X, Y, D);
console.log(result);
