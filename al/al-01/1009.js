// 재용이는 최신 컴퓨터 10대를 가지고 있다. 어느 날 재용이는 많은 데이터를 처리해야 될 일이 생겨서
// 각 컴퓨터에 1번부터 10번까지의 번호를 부여하고
// 10대의 컴퓨터가 다음과 같은 방법으로 데이터들을 처리하기로 하였다.
// 1번 데이터는 1번 컴퓨터, 2번 데이터는 2번 컴퓨터, 3번 데이터는 3번 컴퓨터, ... ,
// 10번 데이터는 10번 컴퓨터, 11번 데이터는 1번 컴퓨터, 12번 데이터는 2번 컴퓨터, ...
// 총 데이터의 개수는 항상 ab개의 형태로 주어진다.
// 재용이는 문득 마지막 데이터가 처리될 컴퓨터의 번호가 궁금해졌다. 이를 수행해주는 프로그램을 작성하라.

// var fs = require("fs");
// var input = fs.readFileSync("./1009-test-case.js").toString().split("\n");

function inputList(arr) {
  let inputList = [];
  for (raccoon of arr) {
    inputList.push(raccoon.split(" "));
  }
  return inputList;
}

// console.log(inputList(input));

let input = [
  ["5"],
  ["1", "6"],
  ["3", "7"],
  ["6", "2"],
  ["7", "100"],
  ["9", "635"],
];

function findingLastComputer(item) {
  function findingInputLastNumber(item) {
    let inputLast = item.toString();
    let result = Number(inputLast[inputLast.length - 1]);
    return result;
  }
  function taskOperate(int1, int2, fixInt = int1) {
    let tempNumber = (int1 * fixInt).toString();
    let lastNumber = Number(tempNumber[tempNumber.length - 1]);
    int2--;
    if (int2 <= 1) {
      return lastNumber;
    }
    return taskOperate(int1, int2, lastNumber);
  }
  let a = findingInputLastNumber(item[0]);
  let b = Number(item[1]);
  let lastComputerNumber = taskOperate(a, b);
  return lastComputerNumber;
}

// console.log(findingLastComputer(inputList[5]));

function printLastNumber(arr) {
  for (let i = 1; i < Number(arr[0]) + 1; i++) {
    console.log(findingLastComputer(arr[i]));
  }
  return;
}

// printLastNumber(inputList(input));
printLastNumber(input);
