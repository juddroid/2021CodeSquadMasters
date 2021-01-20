let chalk = require('chalk');
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;

//===============================================================

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const expected = 4;

//================================================================

// moves에서 순서확인
// board에서 moves 에서 알려준 라인의 0이 아닌 인형을 찾기
// basket에 있는지 보고 넣기
// 있으면 터뜨리고 카운트
// 없으면 넣기

function solution(board, moves) {
  const basket = [];
  let count = 0;
  for (let j = 0; j < moves.length; j++) {
    let temp = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i][moves[j] - 1] !== 0) {
        temp.push(board[i][moves[j] - 1]);
        if (temp.length === 1) {
          board[i][moves[j] - 1] = 0;
        }
      }
    }
    if (temp.length === 0) {
    } else if (basket[basket.length - 1] === temp[0]) {
      basket.pop();
      count += 2;
    } else {
      basket.push(temp[0]);
    }
  }
  var answer = count;
  return answer;
}

function test() {
  const result = solution(board, moves);
  console.log(`result: ${result}, expected: ${expected}`);
  const boolean = result === expected ? console.log(y('true')) : console.log(r('false'));
  return boolean;
}

test();
