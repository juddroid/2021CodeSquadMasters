/**
 * @param {string} s
 * @return {number}
 */
const s = 'leetcode';

var firstUniqChar = function (s) {
  let list = s.split('');
  let set = {};

  for (let i = 0; i < list.length; i++) {
    if (set[list[i]]) set[list[i]]++;
    else set[list[i]] = 1;
  }

  console.log(set);
  let result = null;
  for (let key in set) {
    if (set[key] === 1) {
      result = list.indexOf(key);
      return result;
    }
  }

  result = -1;
  return result;
};

let result = firstUniqChar(s);
console.log(result);
