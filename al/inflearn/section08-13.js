console.time('timer');

// const n = 5;
// const m = 3;
const n = 33;
const m = 19;

function solution(n, m) {
  const factorial = (i) => {
    if (i === 0) return 1;
    else return i * factorial(i - 1);
  };

  const combinations = (n, m) => {
    return factorial(n) / (factorial(n - m) * factorial(m));
  };

  return combinations(n, m);
}

console.log(solution(n, m));
console.timeEnd('timer');
