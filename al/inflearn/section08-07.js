console.time('timer');

const C = 259;
const K = [81, 58, 42, 33, 61];
// const K = Array(30)
//   .fill(0)
//   .map((el, idx) => idx + 1);

function solution(C, K) {
  K.sort((a, b) => b - a);
  let answer = 0;

  const dfs = (i, sum) => {
    if (sum >= C) return;
    if (i === K.length) {
      answer = Math.max(sum, answer);
    } else {
      dfs(i + 1, sum + K[i]);
      dfs(i + 1, sum);
    }
  };
  dfs(0, 0);
  return answer;
}

console.log(solution(C, K));
console.timeEnd('timer');
