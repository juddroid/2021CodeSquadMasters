const A = [3, 1, 2, 4, 3];

function solution(A) {
  let minList = [];
  let aSum = 0;
  let bSum = A.reduce((acc, cur) => (acc += cur), 0);
  for (let i = 1; i < A.length; i++) {
    aSum += A[i - 1];
    bSum -= A[i - 1];

    let abs = Math.abs(aSum - bSum);
    minList.push(abs);
  }
  return Math.min(...minList);
}

let result = solution(A);
console.log(result);
