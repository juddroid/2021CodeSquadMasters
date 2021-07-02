const A = [0, 1, 0, 1, 1];

function solution(A) {
  let count = 0;
  let car = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) car++;
    else count += car;
  }
  return count > 1000000000 ? -1 : count;
}

let result = solution(A);
console.log(result);
