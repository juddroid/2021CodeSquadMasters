var fs = require("fs");
var input = fs.readFileSync("./10757-test-case.js").toString().split("\n");

// let input = ["9223372036854775807 9223372036854775808"];

let inputList = input[0].split(" ");

function adder(a = 0, b = 0, c) {
  let s = Number(a) + Number(b) + c;
  let string_s = s.toString();
  let sum, carry;
  if (string_s.length === 1) {
    sum = Number(string_s);
    carry = 0;
  } else {
    sum = Number(string_s[1]);
    carry = Number(string_s[0]);
  }
  let result = [carry, sum];
  return result;
}

const listA = inputList[0].split("").reverse();
const listB = inputList[1].split("").reverse();

const bigIntList = [];

function bigAdder(list_a, list_b) {
  let carryValue = 0;
  let arrLength =
    list_a.length >= list_b.length ? list_a.length : list_b.length;
  for (let i = 0; i < arrLength; i++) {
    let raccoon = adder(list_a[i], list_b[i], carryValue);
    bigIntList.push(raccoon[1]);
    carryValue = raccoon[0];
    if (i === listA.length - 1) {
      bigIntList.push(carryValue);
    }
  }
  return bigIntList;
}

const big = bigAdder(listA, listB).reverse().join("");
console.log(big);

// function printBigInt(str) {
//   const SAFE_NUMBER = 10;
//   i = 0;
//   str.slice(i, i + SAFE_NUMBER);
// }
