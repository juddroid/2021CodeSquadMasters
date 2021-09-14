console.time('timer');

const arr = [1, 3, 5, 6, 7, 10];

function solution(arr) {
  let answer = 'NO';
  let total = arr.reduce((acc, cur) => acc + cur, 0);
  let flag = false;

  const dfs = (i, sum) => {
    if (flag) return;
    if (i === arr.length) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = true;
      }
    } else {
      dfs(i + 1, sum + arr[i]);
      dfs(i + 1, sum);
    }
  };

  dfs(0, 0);
  return answer;
}

console.log(solution(arr));
console.timeEnd('timer');
