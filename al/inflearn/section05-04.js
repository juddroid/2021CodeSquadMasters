console.time('timer');

let n = 5;
let arr = [1, 3, 1, 2, 3];
function solution(n, arr) {
  let sum = 0;
  let lt = 0;
  let rt = 0;
  let count = 0;

  while (rt <= arr.length) {
    if (sum <= n) {
      count += arr.slice(lt, rt).length;
      sum += arr[rt];
      rt++;
    } else {
      sum -= arr[lt];
      lt++;
    }
  }
  return count;
}

console.log(solution(n, arr));
console.timeEnd('timer');
