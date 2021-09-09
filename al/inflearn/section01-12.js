console.time('timer');
const word = 'StuDY';

function solution(word) {
  return word
    .split('')
    .map((el) => {
      if (el.toUpperCase() === el) {
        el = el.toLowerCase();
      } else {
        el = el.toUpperCase();
      }
      return el;
    })
    .join('');
}

console.log(solution(word));
console.timeEnd('timer');
