function solution(a, b, c) {
  let temp = a;

  const smaller = (x, y) => (x > y ? y : x);
  if (smaller(temp, b)) temp = b;
  if (smaller(temp, c)) temp = c;

  return temp;
}

console.log(solution(99, 88, 77));
