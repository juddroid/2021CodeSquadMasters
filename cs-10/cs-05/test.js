const { log } = console;

const compose = (...fns) => {
  // console.log(fns);
  return (...args) => {
    // console.log(args);
    return fns.reduceRight((res, fn) => {
      // console.log(`res: ${res}, fn: ${fn}`);
      return [fn.call(null, ...res)];
    }, args)[0];
  };
};

const isFactor = (number, potentialFactor) => number % potentialFactor === 0;

const factors = (number) =>
  Array.from({ length: Math.sqrt(number) }, (_, i) => i + 1)
    .filter((pod) => isFactor(number, pod))
    .reduce((acc, pod) => {
      acc.add(pod);
      acc.add(number / pod);
      return acc;
    }, new Set());

const sum = (factors) => [...factors].reduce((acc, val) => acc + val, 0);

const isClassifier = (number) =>
  sum(factors(number)) - number === number
    ? "perfect"
    : sum(factors(number)) - number > number
    ? "abundant"
    : "deficient";

const equalSet = (aset, bset) => {
  if (aset.size !== bset.size) return false;
  for (let a of aset) if (!bset.has(a)) return false;
  return true;
};

const isPrime = (number) => number > 1 && equalSet(factors(number), new Set([1, number]));

// // 2 - 100까지 자연수 목록 출력
const getArray = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => i + from);

const printNumbers = (numbers) => {
  return numbers.reduce((acc, val) => {
    let currStr = `${val} : ${isClassifier(val)}, `;
    if (isPrime(val)) currStr += "prime";
    acc += currStr + "\n";
    return acc;
  }, "");
};

// const numbers = getArray(2, 100);
// log(printNumbers(numbers));

const myPrint = compose(printNumbers, getArray);
log(myPrint(2, 100));
