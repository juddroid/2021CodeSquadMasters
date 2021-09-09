console.time('timer');
// const word = 'study';
// const word = 'good';
const word = 'raccoon';

function solution(word) {
  let length = word.length;
  if (length % 2 !== 0) {
    return word[Math.floor(length / 2)];
  } else {
    return word.slice(length / 2 - 1, length / 2 + 1);
  }
}

console.log(solution(word));
console.timeEnd('timer');
