console.time('timer');

let word = 'found7, time: study; Yduts; emit, 7Dnuof';

function solution(word) {
  let str = word.toLowerCase().replace(/[^a-z]/g, '');
  let reverse = str.split('').reverse().join('');

  return str === reverse ? 'YES' : 'NO';
}

console.log(solution(word));
console.timeEnd('timer');
