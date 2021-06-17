const N = 1041;

function solution(N) {
  let bin = N.toString(2);
  let list = bin.split('');
  console.log(list);
  let count = 0;
  let gap = [];
  for (let i = 0; i < list.length; i++) {
    if (+list[i] === 0) {
      count++;
    } else {
      gap.push(count);
      count = 0;
    }
  }
  console.log(gap);
  return Math.max(...gap);
}

let result = solution(N);
console.log(result);
