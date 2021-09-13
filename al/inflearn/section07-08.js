console.time('timer');

// let arr = [
//   [1, 4],
//   [2, 3],
//   [3, 5],
//   [4, 6],
//   [5, 7],
// ];

let arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];

function solution(arr) {
  let result = 1;
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let et = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] >= et) {
      result++;
      et = arr[i][1];
    }
  }

  return result;
}

let nums = console.log(solution(arr));
console.timeEnd('timer');
