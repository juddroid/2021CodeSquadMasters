const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString().split('\n');
function justPrint(word) {
  word.forEach((element) => {
    console.log(element);
  });
}

justPrint(input);
