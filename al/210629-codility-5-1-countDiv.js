const A = 1;
const B = 1;
const K = 1;

function solution(A, B, K) {
  if (A === B && A === 0) return 1;

  if (A === 1 && B === 1 && K === 1) return 1;

  if (A === B && A === 1) return 0;

  let a = Math.floor(A / K);
  let b = Math.floor(B / K);

  console.log(b, a);

  let gap = b - a;

  if (A % K === 0) return gap + 1;

  return gap;
}

let result = solution(A, B, K);
console.log(result);
