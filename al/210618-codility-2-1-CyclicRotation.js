const A = [3, 8, 9, 7, 6];
const K = 3;

function solution(A, K) {
  let first = A.slice(0, A.length - K);
  let second = A.slice(A.length - K, A.length);
  let result = second.concat(first);
  return result;
}

let result = solution(A, K);
console.log(result);
