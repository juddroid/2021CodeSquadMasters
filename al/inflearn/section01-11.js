console.time('timer');
const word = 'KoreaTimeGood';

function solution(word) {
  // return word.split('').filter((el) => el.toUpperCase() === el).length;

  return word.split('').filter((el) => el.charCodeAt() < 91).length;
}

console.log(solution(word));
console.timeEnd('timer');
