console.time('timer');

const n = 3;

function solution(n) {
  let answer = [];
  let ch = Array(n + 1).fill(0);

  const dfs = (i) => {
    if (i === n + 1) {
      let temp = '';
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] === 1) {
          temp += i + ' ';
        }
      }
      temp.length > 0 && answer.push(temp.trim());
    } else {
      ch[i] = 1;
      dfs(i + 1);
      ch[i] = 0;
      dfs(i + 1);
    }
  };
  dfs(1);

  return answer;
}

console.log(solution(n));
console.timeEnd('timer');
