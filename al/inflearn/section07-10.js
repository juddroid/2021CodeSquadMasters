console.time('timer');

const n = 32;
const arr = [23, 87, 65, 12, 57, 32, 99, 81];

function solution(arr) {
  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = arr.length;

  while (lt <= rt) {
    let mid = Math.floor(lt + rt / 2);

    if (arr[mid] === n) return mid + 1;
    if (arr[mid] > n) rt = mid;
    else lt = mid;
  }
}

let nums = console.log(solution(arr));
console.timeEnd('timer');
