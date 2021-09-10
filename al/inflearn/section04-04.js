console.time('timer');

let arr = [
  [5, 28],
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

function solution(arr) {
  let first = arr.shift();
  let student = first[0];
  let deposit = first[1];
  let answer = 0;
  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < arr.length; i++) {
    let extra = deposit - (arr[i][0] / 2 + arr[i][1]);
    let count = 1;

    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > extra) break;
      if (j !== i && arr[j][0] + arr[j][1] <= extra) {
        extra -= arr[j][0] + arr[j][1];
        count++;
      }
    }
    answer = count;
  }
  return answer;
}

console.log(solution(arr));
console.timeEnd('timer');
