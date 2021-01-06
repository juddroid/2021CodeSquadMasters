// 재용이는 최신 컴퓨터 10대를 가지고 있다. 어느 날 재용이는 많은 데이터를 처리해야 될 일이 생겨서
// 각 컴퓨터에 1번부터 10번까지의 번호를 부여하고
// 10대의 컴퓨터가 다음과 같은 방법으로 데이터들을 처리하기로 하였다.
// 1번 데이터는 1번 컴퓨터, 2번 데이터는 2번 컴퓨터, 3번 데이터는 3번 컴퓨터, ... ,
// 10번 데이터는 10번 컴퓨터, 11번 데이터는 1번 컴퓨터, 12번 데이터는 2번 컴퓨터, ...
// 총 데이터의 개수는 항상 ab개의 형태로 주어진다.
// 재용이는 문득 마지막 데이터가 처리될 컴퓨터의 번호가 궁금해졌다. 이를 수행해주는 프로그램을 작성하라.

// var fs = require("fs");
// var input = fs.readFileSync("./1009-test-case.js").toString().split("\n");
const line = require("fs").readFileSync("./1009-test-case.js", "utf8");
let input = line.trim().split("\n");

function inputList(arr) {
  let tempList = [];
  for (raccoon of arr) {
    tempList.push(raccoon.split(" "));
  }
  return tempList;
}

console.log(inputList(input));

// let input = [
//   ["5"],
//   ["1", "6"],
//   ["3", "7"],
//   ["6", "2"],
//   ["7", "100"],
//   ["9", "635"],
// ];

function findingLastComputer(item) {
  function findingInputLastNumber(item) {
    let inputLast = item.toString();
    let result = parseInt(inputLast[inputLast.length - 1]);
    return result;
  }
  function taskOperate(int1, int2, fixInt = int1) {
    const RECURSION_NUMBER = 4;
    const TEMP_LIST = [];
    for (let i = 0; i < RECURSION_NUMBER; i++) {
      let int1_temp = (int1 * fixInt).toString();
      let int1_Last = parseInt(int1_temp[int1_temp.length - 1]);
      TEMP_LIST.push(int1_Last);
      int1 = int1_Last;
    }
    let result = TEMP_LIST[((int2 - 1) % RECURSION_NUMBER) - 1];
    return result;
  }
  let a = findingInputLastNumber(item[0]);
  let b = parseInt(item[1]);
  let lastComputerNumber = taskOperate(a, b);
  return lastComputerNumber;
}

// console.log(findingLastComputer(inputList[5]));

function printLastNumber(arr) {
  for (let i = 1; i < parseInt(arr[0]) + 1; i++) {
    console.log(findingLastComputer(arr[i]));
  }
  return;
}

printLastNumber(inputList(input));
// printLastNumber(input);
