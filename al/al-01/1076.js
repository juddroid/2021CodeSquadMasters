// 전자 제품에는 저항이 들어간다. 저항은 색 3개를 이용해서 그 저항이 몇 옴인지 나타낸다.
// 처음 색 2개는 저항의 값이고, 마지막 색은 곱해야 하는 값이다.
// 저항의 값은 다음 표를 이용해서 구한다.
// const data = require("./1076-test-case");
var fs = require("fs");
var input = fs.readFileSync("./1076-test-case.js").toString().split("\n");
// const input = data.inputColorList;

const colorList = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

const resistanceObj = {};

function setTable(obj, list) {
  let val = 0;
  let mul = 1;
  for (item of list) {
    obj[item] = {
      value: val,
      multiple: mul,
    };
    val++;
    mul *= 10;
  }

  return obj;
}

const RESISTANCE_TABLE = setTable(resistanceObj, colorList);

console.table(RESISTANCE_TABLE);
// console.log(input);

function ResistanceValue(first, second, third) {
  let resist1 = RESISTANCE_TABLE[first].value.toString();
  let resist2 = RESISTANCE_TABLE[second].value.toString();
  let resist3 = RESISTANCE_TABLE[third].multiple;
  let result = Number(resist1 + resist2) * resist3;
  return result;
}

console.log(ResistanceValue(input[0], input[1], input[2]));
