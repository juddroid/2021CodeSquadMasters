const fs = require('fs');
// const num = fs.readFileSync('/dev/stdin').toString();
// const num = fs.readFileSync('./test').toString();

function star(number) {
  const newNumber = Number(number);
  let result = '';
  for (let i = 0; i < newNumber; i++) {
    result += `*`.repeat(i + 1);
    result += `\n`;
  }
  return console.log(result);
}

// star(num);
