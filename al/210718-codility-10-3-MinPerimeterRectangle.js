const N = 36;

function solution(N) {
  if (N === 1) return 4;

  let factor = [];
  for (let i = 1; i < Math.sqrt(N) + 1; i++) {
    if (N % i === 0) {
      factor.push([i, N / i]);
    }
  }
  let periList = factor.map((el) => (el[0] + el[1]) * 2);

  console.log(factor);
  console.log(periList);
  return Math.min(...periList);
}

let result = solution(N);
console.log(result);
