const S = '())(()';

function solution(S) {
  if (S.length % 2 === 1) return 0;
  if (S === '') return 1;

  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '{' || S[i] === '[' || S[i] === '(') {
      stack.push(S[i]);
    } else if (S[i] === '}') {
      if (stack.pop() !== '{') return 0;
    } else if (S[i] === ']') {
      if (stack.pop() !== '[') return 0;
    } else if (S[i] === ')') {
      if (stack.pop() !== '(') return 0;
    }
  }
  if (stack.length === 0) return 1;

  return 0;
}

let result = solution(S);
console.log(result);
