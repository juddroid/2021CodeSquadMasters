const A = [10, 2, 5, 1, 8, 20];

function solution(A) {
  let result = 0;
  let sorted = A.sort((a, b) => b - a);
  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] < sorted[i + 1] + sorted[i + 2]) {
      return (result = 1);
    }
  }

  return result;
}

let result = solution(A);
console.log(result);
