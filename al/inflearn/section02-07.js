console.time('timer');

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

function solution(arr) {
  let maxRowSum = 0;
  let maxColSum = 0;
  let maxCroSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i].reduce((acc, cur) => (acc += cur), 0);
    if (sum > maxRowSum) maxRowSum = sum;
  }
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = 0; j < arr.length; j++) {
      temp.push(arr[j][i]);
    }
    let sum = temp.reduce((acc, cur) => (acc += cur), 0);
    if (sum > maxCroSum) maxCroSum = sum;
  }

  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) temp.push(arr[i][j]);
    }
  }

  let sum = temp.reduce((acc, cur) => (acc += cur), 0);
  if (sum > maxCroSum) maxCroSum = sum;

  let temp2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i + j === arr.length - 1) {
        temp2.push(arr[i][j]);
      }
    }
  }
  let sum2 = temp2.reduce((acc, cur) => (acc += cur), 0);
  if (sum2 > maxCroSum) maxCroSum = sum2;

  return Math.max(maxRowSum, maxColSum, maxCroSum);
}

console.log(solution(arr));
console.timeEnd('timer');
