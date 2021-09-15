console.time('timer');

const C = 20;
const arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

function solution(C, arr) {
  let score = 0;

  const dfs = (i, sum, ts) => {
    if (sum > C) return;
    if (i === arr.length) {
      score = Math.max(score, ts);
    } else {
      dfs(i + 1, sum + arr[i][1], ts + arr[i][0]);
      dfs(i + 1, sum, ts);
    }
  };
  dfs(0, 0, 0);

  return score;
}

console.log(solution(C, arr));
console.timeEnd('timer');
