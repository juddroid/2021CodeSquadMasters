console.time('timer');

const n = 3;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solution(arr) {
  let min = Math.max(...arr);
  let max = arr.reduce((acc, cur) => acc + cur, 0);
  let result = 0;

  const count = (list, num) => {
    let count = 1;
    let sum = 0;
    for (const x of list) {
      if (sum + x > num) {
        count++;
        sum = x;
      } else {
        sum += x;
      }
    }
    return count;
  };

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    console.log(min, max, mid);
    if (count(arr, mid) <= n) {
      result = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return result;
}

console.log(solution(arr));
console.timeEnd('timer');
