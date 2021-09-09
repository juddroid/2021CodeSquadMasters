function solution(n) {
  let list = Array(n)
    .fill(0)
    .map((el, idx) => (el = idx + 1));
  return list.reduce((acc, cur) => (acc += cur), 0);
}

console.log(solution(10));
