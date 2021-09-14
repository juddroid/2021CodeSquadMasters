console.time('timer');

const n = 1;

function solution(n) {
  let answer = [];

  const dfs = (i) => {
    if (i > 7) return;
    else {
      // 전위
      dfs(i * 2);
      // 중위
      dfs(i * 2 + 1);
      // 후위
      answer.push(i);
    }
  };
  dfs(n);
  return answer;
}

console.log(solution(n));
console.timeEnd('timer');
