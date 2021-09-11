console.time('timer');

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  const idx = moves.map((el) => el - 1);

  let count = 0;
  let stack = [];

  while (idx.length) {
    let current = idx.shift();
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (current === i && board[j][i] !== 0) {
          if (stack[stack.length - 1] === board[j][i]) {
            stack.pop();
            board[j][i] = 0;
            count += 2;
            break;
          }
          stack.push(board[j][i]);
          board[j][i] = 0;
          break;
        }
      }
    }
  }
  return count;
}

console.log(solution(board, moves));
console.timeEnd('timer');
