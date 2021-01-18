// 불변성 (Immutable) 값이나 변수를 적극 활용할 수 있다.
// 함수가 참조 투명성을 지키고, 부작용을 줄일 수 있도록 구현할 수 있다.
// 순수함수 (Pure Function) 로 구현할 수 있다.

const factors = (num) => {
  const isFactor = (number, potentialFactor) => number % potentialFactor == 0;
  return Array.from({ length: Math.sqrt(num) }, (_, i) => i + 1)
    .filter((pod) => isFactor(num, pod))
    .reduce((acc, cur) => {
      acc.add(cur);
      acc.add(num / cur);
      return acc;
    }, new Set());
};

const isPerfect = (num) => sum(factors(num)) - num === num;

const isAbundant = (num) => sum(factors(num)) - num > num;

const isDeficient = (num) => sum(factors(num)) - num < num;

const sum = (factors) => Array.from(factors).reduce((acc, cur) => (acc += cur), 0);

// 얘가 좀 퓨어하지 않다. 수정이 필요하다.
const equalSet = (aset, bset) => aset.size === bset.size;

const isPrime = (num) => {
  let primeSet = new Set([1, num]);
  return num > 1 && equalSet(factors(num), primeSet);
};

// let alpha1 = 10;
// let alpha2 = 6;

// console.log(isPerfect(alpha1));
// console.log(isPerfect(alpha2));

// let prime1 = 97;
// let prime2 = 7;

// console.log(isPrime(prime1));
// console.log(isPrime(prime2));

module.exports = { isPerfect, isAbundant, isDeficient, isPrime };
