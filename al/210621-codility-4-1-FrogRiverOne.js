const X = 3;
const A = [1, 3, 1, 3, 2, 1, 3];

function solution(X, A) {
  let set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
    if (set.size === X) {
      return i;
    }
  }

  return -1;
}

let result = solution(X, A);
console.log(result);
