const A = [4, 3, 2, 1, 5];
const B = [0, 1, 0, 0, 0];

function solution(A, B) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    let current = A[i];
    if (B[i] === 1) {
      stack.push(current);
    } else {
      if (stack.length === 0) {
        count++;
      } else {
        let length = stack.length;
        for (let j = 0; j < length; j++) {
          let pop = stack.pop();
          if (A[i] < pop) {
            stack.push(pop);

            break;
          }
        }
        if (stack.length === 0) count++;
      }
    }
  }

  return count + stack.length;
}

let result = solution(A, B);
console.log(result);
