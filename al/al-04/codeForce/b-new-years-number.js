// New Year's Number

let chalk = require('chalk');
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;

const input = [1, 4041, 4042, 8081, 8079];
const output = ['NO', 'YES', 'YES', 'YES', 'NO'];

// var cnt = +readline();
// var arr = [];
// for(var i = 0; i < cnt; i++) {
//     arr.push(readline());
// }

function newYearsNumber(n) {
  if (n < 2020) {
    return 'NO';
  }

  if (n % 2020 === 0 || n % 2021 === 0) {
    return 'YES';
  }

  return newYearsNumber(n - 2021);
}

// for (var i = 0; i < arr.length; i++) {
//   print(newYearsNumber(arr[i]))
// }

function test(expected) {
  for (let i = 0; i < input.length; i++) {
    let result = newYearsNumber(input[i]);
    console.log(`expected: ${expected[i]}, result: ${result}`);
    JSON.stringify(expected[i]) === JSON.stringify(result) ? console.log(y('true')) : console.log(r('false'));
  }
}

test(output);
