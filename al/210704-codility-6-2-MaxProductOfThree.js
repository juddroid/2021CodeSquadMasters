const A = [-5, -6, -4, -7, -10];

function solution(A) {
  // let plus = [];
  // let zero = [];
  // let minus = [];

  // let first = 0;
  // let second = 0;
  // let third = 0;

  // let temp = false;

  // if (A.length === 3) return A[0] * A[1] * A[2];

  // for (let i = 0; i < A.length; i++) {
  //   if (A[i] === 0) zero.push(A[i]);
  //   else if (A[i] > 0) plus.push(A[i]);
  //   else if (A[i] < 0) minus.push(A[i]);
  // }

  // let sortedPlus = plus.sort((a, b) => b - a);
  // let sortedMinus = minus.sort((a, b) => b - a);

  // console.log(sortedPlus, sortedMinus, zero);

  // if (sortedPlus.length > 0) {
  //   first = sortedPlus[0];
  // } else {
  //   first = sortedMinus[0];
  //   sortedMinus.shift();
  // }

  // if (sortedMinus.length >= 2) {
  //   second = sortedMinus[sortedMinus.length - 1];
  //   third = sortedMinus[sortedMinus.length - 2];
  // }

  // if (sortedPlus.length >= 3) {
  //   temp = sortedPlus[0] * sortedPlus[1] * sortedPlus[2];
  // }
  // if (!temp) {
  //   temp = first * sortedMinus[0] * sortedMinus[1];
  // }

  // if (!temp) {
  //   return first * second * third;
  // }

  // if (sortedPlus.length === 0 && zero.length !== 0) {
  //   return 0;
  // }
  // console.log(first, second, third, temp);
  // let maximal = Math.max(first * second * third, temp);
  // return maximal;

  let sorted = A.sort((a, b) => a - b);
  let containNagative = sorted[0] * sorted[1] * sorted[sorted.length - 1];
  let containPositive =
    sorted[sorted.length - 1] *
    sorted[sorted.length - 2] *
    sorted[sorted.length - 3];

  let result =
    containPositive >= containNagative ? containPositive : containNagative;

  return result;
}

let result = solution(A);
console.log(result);
