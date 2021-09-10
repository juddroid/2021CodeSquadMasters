console.time('timer');

// let word = 'gooG';
let word = 'kooKkook';

function solution(word) {
  let origin = word
    .split('')
    .map((el) => el.toLowerCase())
    .join('');
  let copy = origin.split('').reverse().join('');
  return origin === copy ? 'YES' : 'NO';
}

console.log(solution(word));
console.timeEnd('timer');
