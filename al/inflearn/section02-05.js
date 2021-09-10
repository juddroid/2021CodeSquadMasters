console.time('timer');

// const scores = [87, 89, 92, 100, 76];
const scores = [87, 92, 92, 100, 92];

function solution(scores) {
  let copy = [...scores].sort((a, b) => b - a);
  let dic = {};
  for (let i = 0; i < copy.length; i++) {
    if (!dic[copy[i]]) dic[copy[i]] = i + 1;
  }
  let map = scores.map((el) => dic[el]);
  return map;
}

console.log(solution(scores));
console.timeEnd('timer');
