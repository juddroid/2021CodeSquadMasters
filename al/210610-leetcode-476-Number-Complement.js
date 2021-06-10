const num = 5;

var findComplement = function (num) {
  let bit = num.toString(2);
  let list = bit.split('');

  let newList = list.map((el) => (+el === 1 ? (el = 0) : (el = 1)));

  let complement = newList.join('');

  let result = parseInt(complement, 2);

  return result;
};

let result = findComplement(num);
console.log(result);
