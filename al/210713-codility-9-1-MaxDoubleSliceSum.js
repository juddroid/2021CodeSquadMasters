const A = [3, 2, 6, -1, 4, 5, -1, 2];

function solution(A) {
  if (A.length === 3) return 0;
  let left = A.map((_) => 0);
  let right = A.map((_) => 0);

  for (let i = 1; i < A.length - 1; i++) {
    left[i] = Math.max(0, left[i - 1] + A[i]);
  }

  for (let i = A.length - 2; i >= 1; i--) {
    right[i] = Math.max(0, right[i + 1] + A[i]);
  }

  let max = 0;
  for (let i = 1; i < A.length - 1; i++) {
    max = Math.max(max, left[i - 1] + right[i + 1]);
  }

  return max;
}

let result = solution(A);
console.log(result);
