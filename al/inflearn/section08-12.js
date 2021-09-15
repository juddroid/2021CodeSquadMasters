console.time('timer');

const n = 5;

function solution(n) {
  const factorial = (i) => {
    if (i === 0) return 1;
    else return i * factorial(i - 1);
  };
  return factorial(n);
}

console.log(solution(n));
console.timeEnd('timer');
