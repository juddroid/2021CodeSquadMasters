const fs = require('fs');
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const input = fs.readFileSync('./test').toString().trim();

function sortInside(num) {
  console.log(
    num
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

sortInside(input);
