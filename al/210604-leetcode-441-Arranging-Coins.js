const n = 8;

var arrangeCoins = function (n) {
  let t = n;
  let stairs = 1;
  let complete = 0;
  for (let i = 0; i < t; i++) {
    if (n >= stairs) {
      n = n - stairs;
      stairs += 1;
      complete += 1;
    } else {
      return complete;
    }
  }

  return complete;
};

let result = arrangeCoins(n);
console.log(result);
