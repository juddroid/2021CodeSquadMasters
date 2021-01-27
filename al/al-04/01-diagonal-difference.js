var fs = require('fs');
var input = fs.readFileSync('./01-1-data.js').toString().split('\n');

const sampleData = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected = 2;

function getSquare(sample) {
  let arr = [];
  for (let i = 1; i < sample.length; i++) {
    arr.push(sample[i].split(' '));
  }
  return arr;
}

const square = getSquare(input);
const squareExpected = 15;
console.log(square);

function diagonalDifference(arr) {
  function rightDiagonal(arr) {
    // right
    let rightSum = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i === j) {
          console.log(arr[i][j]);
          rightSum += Number(arr[i][j]);
        }
      }
    }
    return rightSum;
  }

  function leftDiagonal(arr) {
    // left
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i + j === arr.length - 1) {
          console.log(arr[i][j]);
          leftSum += Number(arr[i][j]);
        }
      }
    }
    return leftSum;
  }

  const rightSum = rightDiagonal(arr);
  const leftSum = leftDiagonal(arr);

  let result = Math.abs(rightSum - leftSum);
  return result;
}

function test(sample, expect) {
  let result = diagonalDifference(sample);
  console.log(`reuslt: ${result} , expect: ${expected}`);
  return console.log(result === expect);
}

// test(sampleData, expected);
test(square, squareExpected);
