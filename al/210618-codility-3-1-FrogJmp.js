const X = 1;
const Y = 5;
const D = 2;

function solution(X, Y, D) {
  if (Y < D || X >= Y) return 0;
  return (Y - X) % D === 0
    ? Math.floor((Y - X) / D)
    : Math.floor((Y - X) / D + 1);
}

let result = solution(X, Y, D);
console.log(result);
