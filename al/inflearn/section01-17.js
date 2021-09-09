console.time('timer');

const words = ['good', 'time', 'good', 'time', 'student'];

function solution(words) {
  let set = Array.from(new Set(words));
  return set;
}

console.log(solution(words));
console.timeEnd('timer');
