console.time('timer');

const arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

function solution(arr) {
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  return arr;
}

let nums = console.log(solution(arr));
console.timeEnd('timer');
