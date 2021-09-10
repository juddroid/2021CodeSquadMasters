console.time('timer');

let arr = [
  [10, 3],
  [13, 15, 34, 23, 45, 65, 33, 11, 26, 42],
];

function solution(arr) {
  let first = arr.shift();

  // let temp = [];
  // for (let i = 0; i < arr[0].length; i++) {
  //   for (let j = 0; j < arr[0].length; j++) {
  //     for (let k = 0; k < arr[0].length; k++) {
  //       if (i === j || j === k || i === k) break;
  //       temp.push(arr[0][i] + arr[0][j] + arr[0][k]);
  //       temp.sort((a, b) => b - a);
  //     }
  //   }
  // }
  // let result = Array.from(new Set(temp));
  // return result[2];

  let temp = new Set();
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = i + 1; j < arr[0].length; j++) {
      for (let k = j + 1; k < arr[0].length; k++) {
        temp.add(arr[0][i] + arr[0][j] + arr[0][k]);
      }
    }
  }
  let result = Array.from(temp).sort((a, b) => b - a);
  return result[2];
}

console.log(solution(arr));
console.timeEnd('timer');
