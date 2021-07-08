const S = '(()(())())';

function solution(S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      count++;
    } else {
      count--;
    }
    if (count < 0) return 0;
  }

  return count === 0 ? 1 : 0;
}

let result = solution(S);
console.log(result);
