console.time('timer');

const A = [2, 3, 3, 1, 3];
const B = [1, 1, 2, 2, 3];

function solution(A, B) {
  const rcp = (x, y) => {
    if (x === y) return 'D';
    if ((x === 1 && y === 3) || (x === 2 && y === 1) || (x === 3 && y === 2))
      return 'A';
    return 'B';
  };
  let result = [];
  for (let i = 0; i < A.length; i++) {
    result.push(rcp(A[i], B[i]));
  }
  return result;
}

console.log(solution(A, B));
console.timeEnd('timer');
