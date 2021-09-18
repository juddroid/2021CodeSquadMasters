const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('./test').toString().trim().split('\n');

function test(input) {
  let n = input.shift();
  let result = ``;

  const getAvr = (list) => list.reduce((a, b) => a + b, 0) / list.length;
  const getRat = (up, list) => (up / list.length) * 100;
  const checkUp = (avr, list) => {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] > avr) count++;
    }
    return count;
  };

  for (let i = 0; i < input.length; i++) {
    let classes = input[i].split(' ').map((el) => +el);
    let p = classes.shift();
    let avr = getAvr(classes);
    let up = checkUp(avr, classes);
    let rat = getRat(up, classes);
    result += rat.toFixed(3) + '%' + '\n';
  }

  return result.trim();
}

console.log(test(input));
