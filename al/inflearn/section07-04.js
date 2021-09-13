console.time('timer');

const arr = [11, 7, 5, 6, 10, 9];

// 삽입정렬
function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }

  return arr;
}

let nums = console.log(solution(arr));
console.timeEnd('timer');
