const n = [12, 77, 38, 41, 53, 92, 85];

function solution(n) {
  let filtered = n.filter((el) => el % 2 !== 0);
  let oddMin = Math.min(...filtered);
  let sum = filtered.reduce((acc, cur) => (acc += cur), 0);

  return { oddMin, sum };
}

console.log(solution(n));
