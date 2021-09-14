console.time('timer');

const n = 11;

function solution(n) {
  let result = '';
  const dfs = (i) => {
    if (i === 0) return;
    else {
      dfs(Math.floor(i / 2));
      result += `${i % 2}`;
    }
  };
  dfs(n);
  return result;
}

console.log(solution(n));
console.timeEnd('timer');
