console.time('timer');

// const n = 5;
// const m = 3;
const n = 33;
const m = 19;

function solution(n, m) {
  // const factorial = (i) => {
  //   if (i === 0) return 1;
  //   else return i * factorial(i - 1);
  // };
  // const combinations = (n, m) => {
  //   return factorial(n) / (factorial(n - m) * factorial(m));
  // };
  // return combinations(n, m);

  let answer = 0;
  let dy = Array.from(Array(n + 2), () => Array(n + 2).fill(0));

  const dfs = (n, m) => {
    if (dy[n][m] > 0) return dy[n][m];
    if (n === m || m === 0) return 1;
    else return (dy[n][m] = dfs(n - 1, m - 1) + dfs(n - 1, m));
  };

  answer = dfs(n, m);

  return answer;
}

console.log(solution(n, m));
console.timeEnd('timer');
