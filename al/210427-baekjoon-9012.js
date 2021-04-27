const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('./test').toString().split('\n');
function Parenthesis(list) {
  checkParenthesis = (string) => {
    const stringList = string.split('');

    let count = 0;
    stringList.forEach((el) => {
      if (el === '(') {
        count++;
      } else {
        count--;
      }

      if (count < 0) {
        return (count = -100);
      }
    });

    return count;
  };

  for (let i = 1; i <= list[0]; i++) {
    if (checkParenthesis(list[i]) === 0) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
}

Parenthesis(input);
