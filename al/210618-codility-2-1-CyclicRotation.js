const A = [1, 1, 2, 3, 5];
const K = 42;

function solution(A, K) {
  let first = A.slice(0, A.length - (K % A.length));
  let second = A.slice(A.length - (K % A.length), A.length);
  let result = second.concat(first);
  return result;
}

let result = solution(A, K);
console.log(result);
