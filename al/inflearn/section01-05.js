const n = [5, 3, 7, 11, 2, 15, 17];

function solution(n) {
  // n.sort((a, b) => a - b);
  // console.log(n);
  // return n[0];

  // return Math.min(...n);

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < min) min = n[i];
  }
  return min;
}

console.log(solution(n));
