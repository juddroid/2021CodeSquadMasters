console.time('timer');

const arr = [1, 2, 5];
const n = 15;

function solution(arr, n) {
  arr.sort((a, b) => b - a);

  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (i, sum) => {
    if (sum > n) return;
    if (i > answer) return;
    if (sum === n) {
      answer = Math.min(answer, i);
    } else {
      for (let j = 0; j < arr.length; j++) {
        dfs(i + 1, sum + arr[j]);
      }
    }
  };

  dfs(0, 0);
  return answer;
}

console.log(solution(arr, n));
console.timeEnd('timer');
