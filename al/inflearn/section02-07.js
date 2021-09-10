console.time('timer');

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

function solution(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let top = i - 1 < 0 ? 0 : arr[i - 1][j];
      let left = j - 1 < 0 ? 0 : arr[i][j - 1];
      let right = j + 1 > arr.length - 1 ? 0 : arr[i][j + 1];
      let bottom = i + 1 > arr.length - 1 ? 0 : arr[i + 1][j];
      let max = Math.max(top, left, right, bottom, arr[i][j]);
      if (max === arr[i][j]) count++;
    }
  }

  return count;
}

console.log(solution(arr));
console.timeEnd('timer');
