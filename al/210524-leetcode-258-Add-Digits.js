const num = 38;

var addDigits = function (num) {
  const add = (n) => {
    if (n === 0) return 0;
    if (n < 10) return n;

    let list = n.toString().split('');
    let sum = list.reduce((acc, cur) => (acc += +cur), 0);

    if (checkNumLength(sum) >= 2) {
      return add(sum);
    }

    return sum;
  };

  const checkNumLength = (n) => {
    let length = n.toString().split('').length;

    return length;
  };

  return add(num);
};

let result = addDigits(num);
console.log(result);
