console.time('timer');

let word = 'KKHSSSSSSSE';

function solution(word) {
  // let dic = {};
  // for (let i = 0; i < word.length; i++) {
  //   if (dic[word[i]]) dic[word[i]]++;
  //   else dic[word[i]] = 1;
  // }
  // let result = '';
  // for (const key in dic) {
  //   result += key;
  //   if (dic[key] !== 1) {
  //     result += dic[key];
  //   }
  // }
  // return result;

  let count = 0;
  let str = '';
  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i] === str) {
      count++;
    } else {
      if (count > 1) {
        result += count;
      }
      str = word[i];
      count = 0;
      count++;
      result += str;
    }
  }
  return result;
}

console.log(solution(word));
console.timeEnd('timer');
