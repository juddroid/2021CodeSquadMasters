console.time('timer');

// const str = '()(((()())(())()))(())';
const str = '(((()(()()))(())()))(()())';

function solution(str) {
  let cut = 0;
  let current = str[0];
  let stack = [];

  for (let i = 1; i < str.length - 1; i++) {
    if (current === '(' && str[i] === '(') {
      stack.push(0);
    } else if (current === '(' && str[i] === ')') {
      stack = stack.map((el) => el + 1);
    } else if (current === ')' && str[i] === ')') {
      cut += stack.pop() + 1;
    }
    current = str[i];
  }

  return (cut += stack.pop() + 1);
}

console.log(solution(str));
console.timeEnd('timer');
