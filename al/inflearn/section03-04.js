console.time('timer');

let word = 'teachermode e';

function solution(word) {
  let str = word.split(' ')[0];
  let t = word.split(' ')[1];
  let answer = [];

  let temp = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      temp = 0;
      answer.push(temp);
    } else {
      temp++;
      answer.push(temp);
    }
  }

  temp = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === t) {
      temp = 0;
    } else {
      temp++;
      answer[i] = Math.min(answer[i], temp);
    }
  }

  return answer;
}

console.log(solution(word));
console.timeEnd('timer');
