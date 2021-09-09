console.time('timer');
const word = 'COMPUTERPROGRAMMING';
const char = 'R';

function solution(word, char) {
  // let list = word.split('');
  // return list.filter((el) => el === char).length;
  console.log(word.split(char));
  return word.split(char).length - 1;
}

console.log(solution(word, char));
console.timeEnd('timer');
