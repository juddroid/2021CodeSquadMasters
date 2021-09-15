console.time('timer');

const arr = [3, 2];

function solution(arr) {
  let result = [];
  let temp = Array(arr[1]).fill(0);
  const dfs = (i) => {
    if (i === arr[1]) result.push([...temp]);
    else {
      for (let j = 1; j < arr[0] + 1; j++) {
        temp[i] = j;
        dfs(i + 1);
      }
    }
  };

  dfs(0);

  return result;
}

console.log(solution(arr));
console.timeEnd('timer');
