let chalk = require('chalk');
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;

//===============================================================

const s = 'try hello world';

const expected = 'TrY HeLlO WoRlD';

//================================================================

function solution(s) {
  const splitString = s.split(' ');

  console.log(splitString);

  console.log(splitString[0]);

  function toggleCase(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        temp.push(arr[i].toUpperCase());
      } else {
        temp.push(arr[i].toLowerCase());
      }
    }
    return temp.join('');
  }

  console.log(toggleCase(splitString[0]));

  let newString = splitString.map((el) => toggleCase(el)).join(' ');

  console.log(newString);
  var answer = newString;
  return answer;
}

function test() {
  const result = solution(s);
  console.log(`result: ${result}, expected: ${expected}`);
  const boolean = result === expected ? console.log(y('true')) : console.log(r('false'));
  return boolean;
}

test();
