console.time('timer');

const arr = [13, 5, 11, 7, 23, 15];

// 버블정렬
function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let nums = console.log(solution(arr));
console.timeEnd('timer');
