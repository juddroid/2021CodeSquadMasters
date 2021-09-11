console.time('timer');

const a = 'bacaAacba';
const b = 'abc';
function solution(a, b) {
  let count = 0;
  let bStr = b.split('').sort().join('');

  for (let i = 0; i < a.length - 2; i++) {
    let str = a[i] + a[i + 1] + a[i + 2];
    let aStr = str.split('').sort().join('');

    if (aStr === bStr) count++;
  }

  return count;
}

console.log(solution(a, b));
console.timeEnd('timer');
