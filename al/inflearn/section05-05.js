console.time('timer');

let n = 3;
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
function solution(n, arr) {
  let result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    result.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return Math.max(...result);
}

console.log(solution(n, arr));
console.timeEnd('timer');
