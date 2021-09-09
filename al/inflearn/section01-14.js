console.time('timer');
const words = ['teacher', 'time', 'student', 'beautiful', 'good'];

function solution(words) {
  let lengthList = words.map((el) => el.length);
  let max = Math.max(...lengthList);
  let maxIdx = lengthList.indexOf(max);

  return words[maxIdx];
}

console.log(solution(words));
console.timeEnd('timer');
