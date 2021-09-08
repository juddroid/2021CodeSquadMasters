const begin = 'hit';
const target = 'cog';
const words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  let count = 0;
  const visited = new Set();
  let temp = [];
  const queue = [];
  const slice = (str, i) => {
    const list = str.split('');
    list.splice(i, 1);
    return list.join('');
  };

  queue.push(begin);

  while (queue.length) {
    const current = queue.shift();
    visited.add(current);

    if (current === target) return count;

    for (let i = 0; i < current.length; i++) {
      const word = slice(current, i);
      const match = words.filter(
        (el) => !visited.has(el) && slice(el, i) === word
      );
      temp.push(...match);
    }

    if (queue.length === 0) {
      count++;
      queue.push(...temp);
      temp = [];
    }
  }
  return count;
}

const result = solution(begin, target, words);
console.log(result);
