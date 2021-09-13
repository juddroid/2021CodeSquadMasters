console.time('timer');

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

function solution(arr) {
  let timeList = [];
  let count = 0;
  let max = 0;

  for (const f of arr) {
    timeList.push([0, f[0]]);
    timeList.push([1, f[1]]);
  }

  timeList.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    return a[1] - b[1];
  });

  for (const time of timeList) {
    if (time[0] === 0) {
      count++;
      max = Math.max(max, count);
    } else {
      count--;
    }
  }
  return max;
}

let nums = console.log(solution(arr));
console.timeEnd('timer');
