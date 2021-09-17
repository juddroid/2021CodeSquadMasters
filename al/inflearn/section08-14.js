console.time('timer');

const n = 4;
const f = 16;

function solution(n, f) {
  let answer = 0;
  let flag = false;
  let dy = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);

  const combinations = (n, m) => {
    if (dy[n][m] > 0) return dy[n][m];
    if (n === m || m === 0) return 1;
    else
      return (dy[n][m] = combinations(n - 1, m - 1) + combinations(n - 1, m));
  };

  const dfs = (i, sum) => {
    if (flag) return;
    if (i === n && sum === f) {
      answer = p.slice();
      flag = true;
    } else {
      for (let j = 1; j <= n; j++) {
        if (ch[j] === 0) {
          ch[j] = 1;
          p[i] = j;
          dfs(i + 1, sum + b[i] * p[i]);
          ch[j] = 0;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    b[i] = combinations(n - 1, i);
  }

  dfs(0, 0);
  return answer;
}

console.log(solution(n, f));
console.timeEnd('timer');
