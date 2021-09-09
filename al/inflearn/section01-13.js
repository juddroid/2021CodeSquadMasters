console.time('timer');
const word = 'ItisTimeToStudy';

function solution(word) {
  return word
    .split('')
    .map((el) => el.toUpperCase())
    .join('');
}

console.log(solution(word));
console.timeEnd('timer');
