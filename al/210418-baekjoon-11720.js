const fs = require('fs');
// const num = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString().split('\n');

function noSpacePlus(input) {
  const numberList = input[1].split('');
  const result = numberList.reduce((acc, cur) => {
    acc += +cur;
    return acc;
  }, 0);
  return console.log(result);
}

noSpacePlus(input);
