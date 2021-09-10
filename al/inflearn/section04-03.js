console.time('timer');

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

function solution(arr) {
  let count = 0;
  let temp = new Set();

  for (let i = 0; i < arr[0].length; i++) {
    let first = arr[0][i];

    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[j][k] !== first) {
          temp.add(arr[j][k]);
        } else {
          break;
        }
      }
    }
    count += arr[0].length - Array.from(temp).length - 1;
    temp = new Set();
  }
  return count;
}

console.log(solution(arr));
console.timeEnd('timer');
