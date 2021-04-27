const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString().split('\n');

function justPrint(word) {
  const a = +word[0];
  const b = +word[1];
  const bList = word[1].split('').reverse();

  bList.forEach((el) => {
    console.log(a * +el);
  });
  console.log(a * b);
}

justPrint(input);
