var fs = require('fs');
var input = fs.readFileSync('./03-1-data.js').toString().split('\n');

const input0 = [0, 3, 4, 2];
const output0 = 'YES';

const input1 = [0, 2, 5, 3];
const output1 = 'NO';

let inputArr = input.join('').split(' ');

let k1 = Number(inputArr[0]);
let j1 = Number(inputArr[1]);
let k2 = Number(inputArr[2]);
let j2 = Number(inputArr[3]);
console.log(k1, j1, k2, j2);

function kangaroo(x1, v1, x2, v2) {
  for (let i = 1; i < 10000; i++) {
    let kangaroo1 = x1 + v1 * i;
    let kangaroo2 = x2 + v2 * i;
    console.log(kangaroo1, kangaroo2);
    if (kangaroo1 === kangaroo2) {
      return 'YES';
    }
  }
  return 'NO';
}

console.log(kangaroo(k1, j1, k2, j2));
