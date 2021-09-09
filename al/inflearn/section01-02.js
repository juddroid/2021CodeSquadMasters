function solution(a, b, c) {
  let isTriangle = true;
  let list = [a, b, c];
  list.sort((a, b) => a - b);
  if (list[2] >= list[0] + list[1]) isTriangle = false;

  return isTriangle ? 'YES' : 'NO';
}

console.log(solution(3, 5, 6));
