console.time('timer');

const n = 3;

function solution(n) {
  // let i = 1;
  // const recursive = (num) => {
  //   console.log(num);
  //   if (num === n) return;
  //   else recursive(num + 1);
  // };
  // recursive(i);

  const dfs = (i) => {
    if (i === 0) return;
    else {
      dfs(i - 1);
      console.log(i);
    }
  };

  dfs(n);
}

console.log(solution(n));
console.timeEnd('timer');
