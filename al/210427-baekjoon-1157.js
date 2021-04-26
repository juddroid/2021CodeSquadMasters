const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString().trim();

function studyWord(word) {
  const wordList = word.split('').map((el) => el.toUpperCase());

  const wordSet = {};
  wordList.forEach((el) => {
    if (Object.keys(wordSet).includes(el)) wordSet[el]++;
    else wordSet[el] = 1;
  });

  let most = [0];
  let count = 0;
  for (const key in wordSet) {
    if (wordSet[key] > count) {
      most = [key];
      count = wordSet[key];
    } else if (wordSet[key] === count) {
      most.push(key);
    }
  }
  console.table(wordSet);
  console.log(most, count);
  let result = '';
  if (most.length !== 1) return (result = `?`);
  return (result = most[0]);
}

console.log(studyWord(input));
