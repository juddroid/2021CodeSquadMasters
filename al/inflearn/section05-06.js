console.time('timer');

let n = 3;
let flag = 'BACBACCACCBDEDE';
function solution(flag) {
  // let dic = {};
  // for (let i = 0; i < flag.length; i++) {
  //   if (!dic[flag[i]]) dic[flag[i]] = 1;
  //   else dic[flag[i]]++;
  // }
  // let list = [];
  // for (const key in dic) {
  //   list.push({ key: key, value: dic[key] });
  // }
  // list.sort((a, b) => b.value - a.value);
  // return list[0].key;

  let map = new Map();

  for (let i = 0; i < flag.length; i++) {
    if (!map.has(flag[i])) map.set(flag[i], 1);
    else map.set(flag[i], map.get(flag[i]) + 1);
  }

  let max = Number.MIN_SAFE_INTEGER;
  let result = 0;
  for (const [key, value] of map) {
    if (value > max) {
      max = value;
      result = key;
    }
  }

  return result;
}

console.log(solution(flag));
console.timeEnd('timer');
