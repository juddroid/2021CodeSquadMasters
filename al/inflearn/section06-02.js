console.time('timer');

const str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

function solution(str) {
  let dic = {};
  let depth = 0;

  dic[depth] = '';
  for (const x of str) {
    if (x === '(') {
      depth++;
      dic[depth] = '';
    } else if (x === ')') {
      depth--;
    } else {
      dic[depth] += x;
    }
  }

  return dic[0];
}

console.log(solution(str));
console.timeEnd('timer');
