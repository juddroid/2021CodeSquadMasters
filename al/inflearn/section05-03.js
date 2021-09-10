console.time('timer');

let n = 6;
let arr = [1, 2, 1, 3, 1, 1, 1, 2];
function solution(n, arr) {
  let lt = 0;
  let rt = 0;
  let sum = 0;
  let count = 0;

  while (rt < arr.length) {
    if (sum === n) {
      console.log(arr.slice(lt, rt));
      count++;
      sum += arr[rt];
      rt++;
    } else if (sum > n) {
      sum -= arr[lt];
      lt++;
    } else {
      sum += arr[rt];
      rt++;
    }
  }
  return count;
}

console.log(solution(n, arr));
console.timeEnd('timer');
