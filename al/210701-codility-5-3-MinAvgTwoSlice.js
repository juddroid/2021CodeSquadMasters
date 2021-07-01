const A = [5, 6, 3, 4, 9];

function solution(A) {
  let minAvg = (A[0] + A[1]) / 2;
  let result = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let avg = (A[i] + A[i + 1]) / 2;

    if (minAvg > avg) {
      minAvg = avg;
      result = i;
    }
  }

  for (let j = 0; j < A.length - 2; j++) {
    avg = (A[j] + A[j + 1] + A[j + 2]) / 3;

    if (minAvg > avg) {
      minAvg = avg;
      result = j;
    }
  }
  return result;
}

let result = solution(A);
console.log(result);
