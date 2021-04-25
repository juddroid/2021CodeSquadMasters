const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString();

function findingAlphabet(word) {
  const alphabet = `abcdefghijklmnopqrstuvwxyz`;
  const alphabetList = alphabet.split('');
  const wordList = word.split('');
  const wordSet = {};
  wordList.forEach((el, idx) => {
    if (wordSet[el] !== 0 && !wordSet[el]) wordSet[el] = idx;
  });

  const resultList = alphabetList.map((el) => {
    if (wordSet[el] === 0 || wordSet[el]) el = wordSet[el];
    else el = -1;
    return el;
  });
  console.log(resultList.join(' '));
}

findingAlphabet(input);
