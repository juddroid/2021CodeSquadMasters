console.time('timer');

let word = 'g0en2T0s8eSoft';

function solution(word) {
  let str = word.replace(/[^0-9]/g, '');

  return +str;
}

console.log(solution(word));
console.timeEnd('timer');
