// const A = [8, 9, 3, 6, 1, 2];
const A = [23171, 21011, 21123, 21366, 21013, 21367];

function solution(A) {
  if (A.length === 0) return 0;

  let max = 0;
  let gap = 0;
  let cur = A[0];

  for (let i = 1; i < A.length; i++) {
    gap = A[i] - cur;
    max = Math.max(gap, max);
    cur = A[i] < cur ? A[i] : cur;
  }

  return max;
}

let result = solution(A);
console.log(result);
