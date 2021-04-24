const fs = require('fs');
// const num = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString().split('\n');

function quiz(input) {
  console.log(input);
  const checkAnswer = (list) => {
    let answer = 0;
    const score = list.split('').reduce((acc, cur) => {
      if (cur === 'O') {
        answer++;
      } else {
        answer = 0;
      }
      acc += answer;
      return acc;
    }, 0);
    return score;
  };
  for (let i = 1; i < input.length; i++) {
    console.log(checkAnswer(input[i]));
  }
}

quiz(input);
