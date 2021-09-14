console.time('timer');

const n = 3;
const arr = [1, 2, 8, 4, 9];

function solution(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);

  let distance = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    distance = Math.max(arr[i + 1] - arr[i] + 1, distance);
  }
  return distance;
}

console.log(solution(arr));
console.timeEnd('timer');
