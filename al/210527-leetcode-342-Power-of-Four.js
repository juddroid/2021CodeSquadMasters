const n = 16;

var isPowerOfFour = function (n) {
  let i = 0;
  let result = false;
  while (!result) {
    if (4 ** i === n) {
      return (result = true);
    }
    if (4 ** i > n) {
      return (result = false);
    }
    i++;
  }
  return result;
};

let result = isPowerOfFour(s);
console.log(result);
