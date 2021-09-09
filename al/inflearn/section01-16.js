console.time('timer');

const word = 'ksekkset';

function solution(word) {
  let list = word.split('');
  let set = Array.from(new Set(list));
  return set.join('');
}

console.log(solution(word));
console.timeEnd('timer');

console.time('timer');
