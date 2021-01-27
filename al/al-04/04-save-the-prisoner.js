var fs = require('fs');
var input = fs.readFileSync('./04-1-data.js').toString().split('\n');
var expect = fs.readFileSync('./04-2-expect.js').toString().split('\n');

let inputArr = [];
for (let i = 1; i < Number(input[0]) + 1; i++) {
  inputArr.push(input[i].split(' '));
}
let expectArr = [];
for (let i = 0; i < input[0]; i++) {
  expectArr.push(expect[i]);
}

function saveThePrisoner(n, m, s) {
  let result = (m + s - 1) % n;
  return result === 0 ? n : result;
}

function test(input, expect) {
  for (let i = 0; i < input.length; i++) {
    let result = saveThePrisoner(Number(input[i][0]), Number(input[i][1]), Number(input[i][2]));
    let expected = Number(expect[i].slice(0, -1));
    if (result === expected) {
      console.log(`${i}: ${result}`);
      console.log(`${i}: ${expected}`);
      console.log(result === expected);
    }
  }
}

test(inputArr, expectArr);

// console.log(saveThePrisoner(3, 7, 3));

// console.log(n, m, s);

// console.log(s + (m % n) - 1);

// const n = 8;
// const m = 18;
// const s = 8;

// console.log((m % n) + ((s - 1) % n));
