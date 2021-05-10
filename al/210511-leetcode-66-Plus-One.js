const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// const digits = [9, 9];

function plusOne(digits) {
  let reverse = digits.reverse();
  console.log(reverse);
  reverse[0] += 1;
  console.log(reverse);
  for (let i = 0; i < reverse.length; i++) {
    if (reverse[i] === 10) {
      reverse[i] = 0;
      reverse[i + 1] += 1;
      if (isNaN(reverse[i + 1])) {
        reverse[i + 1] = 1;
      }
    }
  }
  let result = reverse.reverse();
  console.log(result);
  return result;
}

plusOne(digits);
