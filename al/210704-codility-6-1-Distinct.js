const A = [2, 1, 1, 2, 3, 1];

function solution(A) {
  let set = Array.from(new Set(A));
  return set.length;
}

let result = solution(A);
console.log(result);
