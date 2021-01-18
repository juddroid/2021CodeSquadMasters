// 앞서 작성한 자연수 분류 ClassifierAlpha, PrimeAlpha 를 이용해서 2-100까지 자연수 중에서
// 완전수(perfect), 과잉수(Abundant), 부족수(Deficient), 소수(Prime) 목록을 출력한다.

// map, filter, reduce 고차 함수를 활용한다.
// 출력을 위해서는 반드시 클로저(또는 람다)를 선언하고 반복문 대신 reduce를 활용해서 출력해야 한다.

let chalk = require("chalk");
let y = chalk.yellow;
let b = chalk.blue;
let r = chalk.red;
let g = chalk.green;
let m = chalk.magenta;
let w = chalk.white;

const { isPerfect, isAbundant, isDeficient, isPrime } = require("../functionalProgramming/classifierAlpha.js");

const getArr = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => i + min);

const print = getArr(2, 100).reduce((acc, cur) => {
  const checkNumber = (num) => {
    let arr = [];
    if (isPerfect(num)) {
      arr.push("perfect");
    } else if (isAbundant(num)) {
      arr.push("abundant");
    } else if (isDeficient(num)) {
      arr.push("deficient");
    }
    if (isPrime(num)) {
      arr.push("prime");
    }
    return arr;
  };

  acc += console.log(`${g(`${cur}`)} : ${y(`${checkNumber(cur).join(", ")}`)}`);
  return acc;
}, "");

print;
