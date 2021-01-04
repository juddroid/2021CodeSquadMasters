// Mission1: 이진 덧셈기

// Mission1-1: halfadder fulladder
// XOR
const xor = (a, b) => a !== b
// AND
const and = (a, b) => a && b
// OR
const or = (a, b) => a || b

const carry = and;
const sum = xor;

function halfadder(bitA, bitB) {
  let sum = xor;
  let carry = and;
  let answer = [carry(bitA, bitB), sum(bitA, bitB)];
  return answer;
}

function fulladder(bitA, bitB, carryVal = false) {
  let sumA = xor(bitA, bitB);
  let carryA = and(bitA, bitB);
  let sumB = xor(carryVal, sumA);
  let carryB = and(carryVal, sumA);
  let carry = or(carryA, carryB)
  // let fullCarry = or(and(bitA, bitB), and(xor(bitA, bitB), carryC))
  // let fullSum = xor(xor(bitA, bitB), carryC)
  let answer = [carry, sumB]
  return answer;
}


// check halfadder
// console.log(halfadder(false, false))
// console.log(halfadder(false, true))
// console.log(halfadder(true, false))
// console.log(halfadder(true, true))

// check fulladder
// console.log(fulladder(false, false, false))
// console.log(fulladder(false, false, true))
// console.log(fulladder(false, true, false))
// console.log(fulladder(false, true, true))
// console.log(fulladder(true, false, false))
// console.log(fulladder(true, false, true))
// console.log(fulladder(true, true, false))
// console.log(fulladder(true, true, true))


// Mission1-2: byteadder

// boolean to number
function toggleBoolean(arr) {
  let newArr = [];
  for (element of arr) {
    if (typeof(arr[0]) === 'boolean') {
        element ? newArr.push(1) : newArr.push(0)
        }
    if (typeof(arr[0]) === 'number') {
        element === 1 ? newArr.push(true) : newArr.push(false)
        }
    }
  return newArr;
}

const dataA  = [ 1, 1, 0, 1, 1, 0, 1, 0 ]
const dataB  = [ 1, 0, 1, 1, 0, 0, 1, 1 ]

// const dataA  = [ 1, 1, 0, 0, 1, 0, 1, 0 ]
// const dataB  = [ 1, 1, 0, 1, 1, 0, 0, 1 ]
const booDataA = toggleBoolean(dataA)
const booDataB = toggleBoolean(dataB)

function byteadder(byteA, byteB) {
  let answer = [];
  let carryVal = false;
  for (let i = 0; i < byteA.length; i++) {
    let full = fulladder(byteA[i], byteB[i], carryVal);
    answer.push(full[1]);
    carryVal = full[0]
    if (i === byteA.length - 1) {
      answer.push(carryVal)
    }
  }
  
  return answer;

}


// console.log(toggleBoolean(byteadder(booDataA, booDataB)))


// Mission2: 진법 변환기

const NUMBER = 2;
function getQuo(num) {
  let count = 0;
  while (num >= NUMBER) {
    num = num - NUMBER;
    count++;
  }
  return count;
}
const rest = (num) => num % NUMBER === 1;

function dec2bin(decimal) {
  let answer = [];
  while (decimal) {
    answer.push(rest(decimal));
    decimal = getQuo(decimal);
  }
  return answer;
}


console.log(dec2bin(10))