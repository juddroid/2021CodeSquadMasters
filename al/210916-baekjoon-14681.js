// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync('./test').toString().trim().split('\n');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  function space(input) {
    let x = +input[0];
    let y = +input[1];

    if (x > 0) {
      if (y > 0) return 1;
      return 4;
    }
    if (x < 0) {
      if (y > 0) return 2;
      return 3;
    }
  }

  console.log(space(input));

  process.exit();
});
