console.time('timer');

const scores = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

function solution(scores) {
  let answer = [];

  let temp = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 1) {
      temp++;
      answer.push(temp);
    } else {
      temp = 0;
      answer.push(temp);
    }
  }
  console.log(answer);
  return answer.reduce((acc, cur) => (acc += cur), 0);
}

console.log(solution(scores));
console.timeEnd('timer');
