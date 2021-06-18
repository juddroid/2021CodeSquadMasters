const A = [1, 2];

function solution(A) {
  let list = A.sort((a, b) => a - b);

  if (list[0] === 2) return 1;
  if (list.length === 1) return list[0] + 1;
  if (list.length === 0) return 1;
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== i + 1) return i + 1;
    else continue;
  }
  return list[list.length - 1] + 1;
}

let result = solution(A);
console.log(result);
