console.time('timer');
const word = 'COMPUTERPROGRAMMING';
const char = 'R';

function solution(word, char) {
  let list = word.split('');
  return list.filter((el) => el === char).length;
}

console.log(solution(word, char));
console.timeEnd('timer');
