// 앞서 작성한 자연수 분류 ClassifierAlpha, PrimeAlpha 를 이용해서 2-100까지 자연수 중에서
// 완전수(perfect), 과잉수(Abundant), 부족수(Deficient), 소수(Prime) 목록을 출력한다.

// map, filter, reduce 고차 함수를 활용한다.
// 출력을 위해서는 반드시 클로저(또는 람다)를 선언하고 반복문 대신 reduce를 활용해서 출력해야 한다.

const { ClassifierAlpha } = require("../functionalProgramming/classifierAlpha.js");
const { PrimeAlpha } = require("../functionalProgramming/primeAlpha.js");

//====================== ClssifierAlpha =====================

var alpha1 = new ClassifierAlpha(10);
var alpha2 = new ClassifierAlpha(6);

// console.log(alpha1.isPerfect());
// console.log(alpha2.isPerfect());

//======================== PrimeAlpha ========================

var prime1 = new PrimeAlpha(10);
var prime2 = new PrimeAlpha(7);

// console.log(prime1.isPrime());
// console.log(prime2.isPrime());
