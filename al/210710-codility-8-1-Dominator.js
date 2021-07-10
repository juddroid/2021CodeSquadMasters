const A = [3, 4, 3, 2, 3, -1, 3, 3];

function solution(A) {
  let dominator = -1;
  let set = {};
  let half = A.length / 2;

  if (A.length === 1) return 0;

  for (let i = 0; i < A.length; i++) {
    if (set[A[i]]) {
      set[A[i]]++;

      if (set[A[i]] > half) {
        return i;
      }
    } else set[A[i]] = 1;
  }

  return dominator;
}

let result = solution(A);
console.log(result);
