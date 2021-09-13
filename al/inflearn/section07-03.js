console.time('timer');

const arr = [1, 2, 3, -3, -2, 5, 6, -6];

// 버블정렬
function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let nums = console.log(solution(arr));
console.timeEnd('timer');
