const n1 = 10;
const n2 = 5;
const result1 = 4;
const result2 = 3;

function solution(n) {
  let answer = 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0)
  }

  return answer;
}

function test() {
  console.log(solution(n1));
  console.log(solution(n1) === result1);
  console.log(solution(n2));
  console.log(solution(n2) === result2);
}

test();
