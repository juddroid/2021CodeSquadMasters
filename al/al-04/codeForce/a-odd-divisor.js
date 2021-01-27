// Odd Divisor
let chalk = require('chalk');
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;

const input = [2, 3, 4, 5, 998244353, 1099511627776];
const output = ['NO', 'YES', 'NO', 'YES', 'YES', 'NO'];

// var fs = require('fs');
// var input = fs.readFileSync('./a-data.js').toString().split('\n');
// console.log(input);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// multi line input
readline.on('line', (line) => {
  print(oddDivisor(line));
});

function oddDivisor(n) {
  if (n !== 1 && n % 2 === 1) {
    return 'YES';
  }
  if (n === 1) {
    return 'NO';
  }
  return oddDivisor(Math.floor(n / 2));
}

function test(expected) {
  for (let i = 0; i < input.length; i++) {
    let result = oddDivisor(input[i]);
    console.log(`expected: ${expected[i]}, result: ${result}`);
    JSON.stringify(expected[i]) === JSON.stringify(result) ? console.log(y('true')) : console.log(r('false'));
  }
}

test(output);

// let i = ''
// process.stdin.on('data', c => i += c)
// process.stdin.on('end', () => {
//     const {EOL} = require('os')
//     const lines = i.split(EOL) /*your input text, split by lines*/
//     console.log(lines);
// })

// var arr = readline().split(' ').map(v => +v);
