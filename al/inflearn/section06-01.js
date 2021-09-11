console.time('timer');

const str = '(()(()))(()';

function solution(str) {
  let result = 'YES';
  let stack = 0;

  for (const x of str) {
    if (x === '(') stack++;
    if (x === ')') stack--;

    if (stack < 0) return 'NO';
  }
  if (stack !== 0) return 'NO';

  return result;
}

console.log(solution(str));
console.timeEnd('timer');
