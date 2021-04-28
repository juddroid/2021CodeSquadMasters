const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = fs.readFileSync('./test').toString().trim();

function sugar(sugar) {
  const a = 3;
  const b = 5;
  const possible = [];
  const sug = +sugar;

  const ssapPossible = sug % a === 0 && sug % b === 0;
  const aPossible = sug % a === 0;
  const bPossible = sug % b === 0;
  const impossible = sug % a !== 0 && sug % b !== 0;

  if (ssapPossible) {
    possible.push(sug / a);
    possible.push(sug / b);
  }
  if (aPossible) {
    possible.push(sug / a);
  }
  if (bPossible) {
    possible.push(sug / b);
  }
  if (aPossible && !bPossible) {
    let currentSugar = sug - a;
    if (currentSugar % b === 0) {
      possible.push(Math.floor(sug / b) + currentSugar / a);
    }
  }
  if (!aPossible && bPossible) {
    let currentSugar = sug - Math.floor(sug / a) * a;
    if (currentSugar % b === 0) {
      possible.push(Math.floor(sug / a) + currentSugar / b);
    }
  }
  if (impossible) {
    let aSugar = Math.floor(sug / a);

    for (let i = 1; i < aSugar + 1; i++) {
      let current = sug - i * a;

      if (current % b === 0) {
        let another = Math.floor((sug - current) / a);

        possible.push(current / b + another);
      }
    }
  }

  const sortedPossibleList = possible.sort((a, b) => a - b);

  let result = '';
  result = sortedPossibleList[0] || -1;
  return result;
}

console.log(sugar(input));
