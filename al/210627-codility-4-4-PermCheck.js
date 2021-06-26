const A = [1, 1];

function solution(A) {
  let sorted = Array.from(new Set(A.sort((a, b) => a - b)));
  console.log(sorted);
  if (sorted.length !== A.length) return 0;
  console.log(sorted);
  let idx = 0;
  for (const i of sorted) {
    if (i === sorted[i - 1]) {
      idx++;
    }
  }
  return idx === sorted[sorted.length - 1] ? 1 : 0;
}

let result = solution(A);
console.log(result);
