console.time('timer');

const a = 'AbaAeCe';
const b = 'baeeACA';
function solution(a, b) {
  let result = 'YES';
  let map = new Map();
  for (const str of a) {
    if (!map.has(str)) map.set(str, 1);
    else map.set(str, map.get(str) + 1);
  }

  for (const str of b) {
    if (!map.has(str) || map.get(str) === 0) return 'NO';
    map.set(str, map.get(str) - 1);
  }
  return result;
}

console.log(solution(a, b));
console.timeEnd('timer');
