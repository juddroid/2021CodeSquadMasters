const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('./test').toString();

function plusCycle(input) {
  let cycle = 0;
  let firstNumber = input;
  if (Number(input) < 10) {
    firstNumber = `0` + input;
  }

  function goCycle(input) {
    cycle++;
    if (input.length < 2) {
      input = `0` + input;
    }
    const splitInput = input.split('');
    let rightNumber = splitInput[1];
    let newRightNumber = (+splitInput[0] + +splitInput[1]).toString().split('');
    const newNumber = +(
      +rightNumber + newRightNumber[newRightNumber.length - 1]
    );
    return +firstNumber === newNumber ? cycle : goCycle(newNumber.toString());
  }
  goCycle(firstNumber);

  return console.log(cycle);
}

plusCycle(input);
