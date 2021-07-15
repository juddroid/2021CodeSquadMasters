const A = [-2, 1, 1];

function solution(A) {
  if (A.length === 1) return A[0];

  let cur = A[0];
  let max = cur;

  for (let i = 1; i < A.length; i++) {
    console.log(A[i], cur + A[i]);
    max = Math.max(max, cur + A[i]);
    cur = Math.max(A[i], cur + A[i]);
    console.log('max', max, 'cur', cur);
  }

  return max > Math.max(...A) ? max : Math.max(...A);
}

let result = solution(A);
console.log(result);
