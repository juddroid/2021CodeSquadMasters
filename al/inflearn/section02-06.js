console.time('timer');

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

function solution(arr) {
  // let maxRowSum = 0;
  // let maxColSum = 0;
  // let maxCroSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   let sum = arr[i].reduce((acc, cur) => (acc += cur), 0);
  //   if (sum > maxRowSum) maxRowSum = sum;
  // }
  // for (let i = 0; i < arr.length; i++) {
  //   let temp = [];
  //   for (let j = 0; j < arr.length; j++) {
  //     temp.push(arr[j][i]);
  //   }
  //   let sum = temp.reduce((acc, cur) => (acc += cur), 0);
  //   if (sum > maxCroSum) maxCroSum = sum;
  // }
  // let temp = [];
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (i === j) temp.push(arr[i][j]);
  //   }
  // }
  // let sum = temp.reduce((acc, cur) => (acc += cur), 0);
  // if (sum > maxCroSum) maxCroSum = sum;
  // let temp2 = [];
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (i + j === arr.length - 1) {
  //       temp2.push(arr[i][j]);
  //     }
  //   }
  // }
  // let sum2 = temp2.reduce((acc, cur) => (acc += cur), 0);
  // if (sum2 > maxCroSum) maxCroSum = sum2;
  // return Math.max(maxRowSum, maxColSum, maxCroSum);

  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < n; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

console.log(solution(arr));
console.timeEnd('timer');
