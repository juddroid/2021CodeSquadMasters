let chalk = require('chalk');
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;

//===============================================================

const array = [1, 5, 2, 6, 3, 7, 4];

const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

const expected = [5, 6, 3];
//================================================================

function solution(array, commands) {
  function miniArray(arr) {
    let temp = array.slice(arr[0] - 1, arr[1]);
    let kNum = temp.sort((a, b) => a - b)[arr[2] - 1];
    return kNum;
  }

  function pushNumber(cmd) {
    let result = [];
    for (let i = 0; i < cmd.length; i++) {
      result.push(miniArray(cmd[i]));
    }
    return result;
  }

  let result = pushNumber(commands);
  var answer = result;
  return answer;
}

//================================================================

function test() {
  let result = solution(array, commands);
  console.log(`expected: ${expected}, result: ${result}`);
  return JSON.stringify(expected) === JSON.stringify(result) ? console.log(y('true')) : console.log(r('false'));
}

test();
